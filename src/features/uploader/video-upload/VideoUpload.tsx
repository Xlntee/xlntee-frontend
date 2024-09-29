import { useRef, useState, ChangeEvent, useEffect } from "react";
import cn from "classnames";

import { Box, Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Snackbar } from "src/features/snackbar";
import { useSnackbarAlert } from "src/hooks/useSnackbarAlert";

import { getUploadedFile } from "../utils";
import { UploaderProps } from "../types";

import "./VideoUpload.scss";

export type VideoUploadProps = UploaderProps & {
  video?: string | null;
  width?: number;
  height?: number;
  showPreview?: boolean;
};

export default function VideoUpload({
  video,
  width,
  height,
  showPreview = true,
  fileSize = 2000,
  buttonText,
  accept = "video/*",
  buttonClassName,
  disabled,
  togglerVariant = "text",
  onChange,
  ...rest
}: VideoUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<string>(video ?? "");
  const refFieldInputFile = useRef<HTMLInputElement>(null);
  const { alertColor, alertMessage, alertVisible, showAlert, closeAlert, setColorAlert, setMessageAlert } =
    useSnackbarAlert();

  useEffect(() => {
    if (video) {
      setUploadedFile(video);
    }
    if (refFieldInputFile.current && !video && uploadedFile.length) {
      refFieldInputFile.current.value = "";
    }
  }, [video]);

  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    const file: File | null = e.currentTarget.files && e.currentTarget.files[0];
    if (!file) return;

    try {
      const fileReader = getUploadedFile(file, fileSize);
      fileReader.onloadend = () => {
        const fileString: string = fileReader.result as string;
        setUploadedFile(fileString);
        setMessageAlert("Upload to browser success");
        setColorAlert("success");
        showAlert();
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
    <Stack gap="10px" className={cn("video-upload", { "video-upload--disabled": disabled })}>
      {showPreview && (
        <>
          {uploadedFile ? (
            <Box className="video-upload__preview" mb={4}>
              <video src={uploadedFile || ""} width={width} height={height} />
            </Box>
          ) : null}
        </>
      )}
      <Box>
        <Button
          onClick={() => refFieldInputFile.current?.click()}
          size="medium"
          variant={togglerVariant}
          disabled={disabled}
          className={buttonClassName}
        >
          <CloudUploadIcon />
          {buttonText}
        </Button>
        <input ref={refFieldInputFile} hidden type="file" accept={accept} onChange={handleChangeFile} {...rest} />
      </Box>
      <Snackbar open={alertVisible} onClose={closeAlert} color={alertColor} title={alertMessage} />
    </Stack>
  );
}
