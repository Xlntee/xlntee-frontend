import { useRef, useState, ChangeEvent, useEffect } from "react";
import cn from "classnames";

import { Box, Button, Avatar, Typography, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import useSnackbarAlert from "src/hooks/useSnackbarAlert";
import { XlnteeColors } from "src/shared/themes/colors";
import { Snackbar } from "src/features/snackbar";

import { getUploadedFile } from "../utils";
import { UploaderProps } from "../types";

import "./ImageUpload.scss";

export type ImageUploadViewType = "square" | "wide" | "avatar";

export type ImageUploadProps = UploaderProps & {
  image?: string | null;
  viewType: ImageUploadViewType;
  width?: number | string;
  height?: number | string;
  showPreview?: boolean;
  title?: string;
  centeredContent?: boolean;
};

export default function ImageUpload({
  image,
  viewType = "wide",
  width = "100%",
  height = "100%",
  showPreview = true,
  fileSize = 2000,
  buttonText,
  title,
  centeredContent,
  buttonClassName,
  togglerVariant = "text",
  disabled,
  onChange,
  ...rest
}: ImageUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<string>(image ?? "");
  const refFieldInputFile = useRef<HTMLInputElement>(null);
  const { alertMessage, alertVisible, showAlert, closeAlert, setColorAlert, setMessageAlert } = useSnackbarAlert();

  const viewTypeCn = cn({
    "image-upload--square": viewType === "square",
    "image-upload--wide": viewType === "wide",
    "image-upload--avatar": viewType === "avatar",
  });

  useEffect(() => {
    if (image) {
      setUploadedFile(image);
    }
    if (refFieldInputFile.current && !image && uploadedFile.length) {
      refFieldInputFile.current.value = "";
    }
  }, [image]);

  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    const file: File | null = e.currentTarget.files && e.currentTarget.files[0];
    if (!file) return;

    try {
      const fileReader = getUploadedFile(file, fileSize);
      fileReader.onloadend = () => {
        const fileString: string = fileReader.result as string;
        setUploadedFile(fileString);
        onChange && onChange(file, fileString);
      };
    } catch (e) {
      if (e instanceof Error) {
        setMessageAlert(e.message);
        setColorAlert("error");
        showAlert();
      }
    }
  }

  return (
    <Stack
      gap="10px"
      className={cn("image-upload", { "image-upload--disabled": disabled }, viewTypeCn)}
      alignItems={centeredContent ? "center" : "initial"}
    >
      {showPreview ? (
        <Box className="image-upload__preview">
          {viewType !== "avatar" ? (
            <img src={uploadedFile || ""} alt="image" width={width} height={height} />
          ) : (
            <Avatar src={uploadedFile} sx={{ width: width, height: height }} className="image-upload__avatar" />
          )}
        </Box>
      ) : null}
      {title && (
        <Box>
          <Typography variant="body2" color={XlnteeColors.GrayColor600}>
            {title}
          </Typography>
        </Box>
      )}
      <Box>
        <Button
          onClick={() => refFieldInputFile.current?.click()}
          size="medium"
          variant={togglerVariant}
          disabled={disabled}
          className={buttonClassName}
          startIcon={<CloudUploadIcon />}
        >
          {buttonText}
        </Button>
        <input
          ref={refFieldInputFile}
          accept=".jpg,.jpeg,.png,.svg,.avif,.webp"
          onChange={handleChangeFile}
          {...rest}
          type="file"
          hidden
        />
      </Box>
      <Snackbar open={alertVisible} onClose={closeAlert} title={alertMessage} />
    </Stack>
  );
}
