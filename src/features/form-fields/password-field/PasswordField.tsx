import { FC, useState } from "react";
import { useFormContext, useController, UseControllerProps } from "react-hook-form";

import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type PasswordFieldProps = {
  name: string;
  rules?: UseControllerProps["rules"];
} & MuiTextFieldProps;

const PasswordField: FC<PasswordFieldProps> = (props) => {
  const { name, rules } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { control, register } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control, rules: rules || {} });

  function onChangeShowPassword(): void {
    setShowPassword((prev) => !prev);
  }

  return (
    <MuiTextField
      {...props}
      {...register(name)}
      value={field.value}
      type={showPassword ? "text" : "password"}
      autoCapitalize="none"
      autoCorrect="off"
      autoComplete="off"
      error={!!error}
      helperText={error?.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? "hide the password" : "display the password"}
              onClick={onChangeShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default PasswordField;
