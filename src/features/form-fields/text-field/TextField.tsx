import { ChangeEvent, FC } from "react";
import { useFormContext, useController, UseControllerProps } from "react-hook-form";

import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

type TextFieldProps = {
  name: string;
  rules?: UseControllerProps["rules"];
  className?: string;
} & MuiTextFieldProps;

const TextField: FC<TextFieldProps> = (props) => {
  const { name, rules, className, onChange } = props;
  const { control, register } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control, rules: rules || {} });

  function defaultOnChange(e: ChangeEvent<HTMLInputElement>): void {
    field.onChange(e);
  }

  return (
    <MuiTextField
      {...props}
      {...register(name)}
      value={field.value || ""}
      autoCapitalize="none"
      autoCorrect="off"
      autoComplete="off"
      error={!!error}
      helperText={error?.message}
      className={className}
      onChange={onChange || defaultOnChange}
    />
  );
};

export default TextField;
