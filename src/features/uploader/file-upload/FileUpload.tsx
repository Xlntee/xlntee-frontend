import { useRef, useState, ChangeEvent, useEffect } from "react";
import cn from "classnames";

import { Box, Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { UploaderProps } from "../types";

import "./FileUpload.scss";

export type FileUploadProps = UploaderProps;

export default function FileUpload({
  file,
  fileSize = 2000,
  buttonText,
  title,
  buttonClassName,
  disabled,
  togglerVariant = "text",
  onChange,
  ...rest
}: FileUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<string>(file ?? "");
  const refFieldInputFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file) {
      setUploadedFile(file);
    }
    if (refFieldInputFile.current && !file && uploadedFile.length) {
      refFieldInputFile.current.value = "";
    }
  }, [file]);

  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    const files: FileList | null = e.currentTarget.files;
    if (!files) return;
    onChange && onChange(files);
  }

  return (
    <Stack gap="10px" className={cn("file-upload", { "file-upload--disabled": disabled })}>
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
        <input ref={refFieldInputFile} accept=".pdf" onChange={handleChangeFile} {...rest} type="file" hidden />
      </Box>
    </Stack>
  );
}
