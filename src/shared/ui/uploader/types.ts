import { InputHTMLAttributes } from "react";

export type UploadTogglerVariant = "text" | "light-contain";

export type UploaderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  file?: string | null;
  fileSize?: number; // kb
  buttonText?: string;
  buttonClassName?: string;
  togglerVariant?: UploadTogglerVariant;
  onChange?: (file: FileList | File, fileBlob?: string) => void;
};
