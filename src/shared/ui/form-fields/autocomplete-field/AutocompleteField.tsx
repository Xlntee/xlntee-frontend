import { FC } from "react";
import { useFormContext, useController, UseControllerProps, Controller } from "react-hook-form";

import {
  Box,
  Autocomplete as MuiAutocomplete,
  FormHelperText,
  TextField,
  Chip,
  AutocompleteProps
} from "@mui/material";

type AutocompleteFieldProps = {
  name: string;
  rules?: UseControllerProps["rules"];
  showErrorMessage?: boolean;
  className?: string;
  placeholder?: string;
  options?: ReadonlyArray<string>;
} & Omit<AutocompleteProps<string, boolean, boolean, boolean>, "renderInput" | "options">;

const AutocompleteField: FC<AutocompleteFieldProps> = ({
  name,
  rules,
  showErrorMessage = true,
  className,
  options,
  placeholder,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control, rules: rules || {} });

  return (
    <Box className={className}>
      <Controller
        name={name}
        control={control}
        render={(property) => (
          <>
            <MuiAutocomplete
              {...property.field}
              multiple
              freeSolo
              options={options || []}
              value={property.field.value}
              clearIcon={false}
              getOptionLabel={(option) => option || ""}
              onChange={(_, newValue) => {
                property.field.onChange(newValue);
                field.onChange(newValue);
              }}
              renderTags={(value, restProps) =>
                // eslint-disable-next-line react/jsx-key
                value.map((option, index) => <Chip label={option} {...restProps({ index })} />)
              }
              renderInput={(params) => <TextField {...params} variant="outlined" placeholder={placeholder} />}
              {...props}
            />
          </>
        )}
      />
      {showErrorMessage && <>{!!error && <FormHelperText error={true}>{error.message}</FormHelperText>}</>}
    </Box>
  );
};

export default AutocompleteField;
