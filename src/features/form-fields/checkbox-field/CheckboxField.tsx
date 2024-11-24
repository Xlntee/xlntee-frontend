import { ChangeEvent, FC } from "react";
import { useFormContext, useController, UseControllerProps, Controller } from "react-hook-form";

import {
  Box,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  Typography
} from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";

type CheckboxFieldProps = {
  name: string;
  rules?: UseControllerProps["rules"];
  showErrorMessage?: boolean;
  label?: string;
  className?: string;
} & MuiCheckboxProps;

const CheckboxField: FC<CheckboxFieldProps> = ({
  name,
  rules,
  showErrorMessage = true,
  label,
  className,
  onChange,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control, rules: rules || {} });

  function defaultOnChange(e: ChangeEvent<HTMLInputElement>): void {
    field.onChange(e);
  }

  return (
    <Box className={className}>
      <Controller
        name={name}
        control={control}
        render={(propery) => (
          <FormControlLabel
            control={
              <MuiCheckbox
                {...propery.field}
                {...props}
                name={field.name}
                checked={field.value || false}
                onChange={onChange || defaultOnChange}
              />
            }
            label={label}
          />
        )}
      />
      {showErrorMessage && (
        <>
          {!!error && (
            <Box>
              <Typography variant="caption" color={XlnteeColors.ErrorDarkColor}>
                {error.message}
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default CheckboxField;
