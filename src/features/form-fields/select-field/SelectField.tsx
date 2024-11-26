import { FC } from "react";
import { useFormContext, useController, UseControllerProps, Controller } from "react-hook-form";

import { Box, SelectProps, MenuItem, Select, FormHelperText, SelectChangeEvent } from "@mui/material";

type SelectFieldProps = {
  name: string;
  rules?: UseControllerProps["rules"];
  showErrorMessage?: boolean;
  className?: string;
  options: any[];
} & SelectProps;

const SelectField: FC<SelectFieldProps> = ({
  name,
  rules,
  showErrorMessage = true,
  options,
  className,
  onChange,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control, rules: rules || {} });

  function defaultOnChange(e: SelectChangeEvent<unknown>): void {
    console.log(e);
    field.onChange(e);
  }

  return (
    <Box className={className}>
      <Controller
        name={name}
        control={control}
        render={(propery) => (
          <Select {...propery.field} {...props} onChange={onChange || defaultOnChange}>
            {options.length
              ? options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))
              : null}
          </Select>
        )}
      />
      {showErrorMessage && <>{!!error && <FormHelperText error={true}>{error.message}</FormHelperText>}</>}
    </Box>
  );
};

export default SelectField;
