import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { FacebookOutlined } from "@mui/icons-material";
import ErrorIcon from "@mui/icons-material/Error";

import { XlnteeColors } from "src/shared/themes/colors";

import { RegistrationFormValues, validationSchema } from "./validation";

const RegistrationForm = () => {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<RegistrationFormValues>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  function onSubmit(data: RegistrationFormValues) {
    console.log(data);
  }

  return (
    <Box className="auth-form">
      <Stack direction="column" gap="20px">
        <Button
          aria-label="login with google button"
          variant="black-outline"
          className="auth-form__auth-btn"
          startIcon={<GoogleIcon />}
        >
          Log in with Google
        </Button>
        <Button
          aria-label="login with facebook button"
          variant="black-outline"
          className="auth-form__auth-btn"
          startIcon={<FacebookOutlined />}
        >
          Log in with Facebook
        </Button>
        <TextField
          {...register("email")}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          type="email"
          placeholder="Email"
        />
        <TextField
          {...register("password")}
          error={!!errors.password?.message}
          type="password"
          placeholder="Password"
        />
        <TextField
          {...register("confirm_password")}
          error={!!errors.confirm_password?.message}
          helperText={errors.confirm_password?.message}
          type="password"
          placeholder="Confirm password"
        />
        <Typography variant="caption" color={XlnteeColors.GrayColor700}>
          The password must be at least 8 characters long and include at least: one capital letter; one small letter;
          one symbol and one number. valid characters: !@#$%^&*()_+/\.-~
        </Typography>
        {!!errors.password?.message && errors.password?.message && (
          <Alert icon={<ErrorIcon />} severity="error">
            Password doesn't match the requirements
          </Alert>
        )}

        <FormControl error={Boolean(errors.agreement)}>
          <Controller
            name="agreement"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                {...register("agreement")}
                control={<Checkbox {...field} checked={field.value} />}
                label={
                  <Typography variant="body2" className="auth-form__terms-text">
                    I have read and accept all <a href="#">terms of use of the platform.</a>
                  </Typography>
                }
              />
            )}
          />
          {errors.agreement && <FormHelperText>{errors.agreement.message}</FormHelperText>}
        </FormControl>

        {/* <Box>
          <FormControlLabel
            {...register("agreement")}
            control={<Checkbox />}
            label={
              <Typography variant="body2" className="auth-form__terms-text">
                I have read and accept all <a href="#">terms of use of the platform.</a>
              </Typography>
            }
          />
          {!!errors.confirm_password?.message && <p>{errors.confirm_password?.message}</p>}
        </Box> */}
        <Button variant="contained" className="auth-form__btn-submit" onClick={handleSubmit(onSubmit)}>
          Sign up
        </Button>
        <Stack direction="column" gap="4px" textAlign="center">
          <Typography variant="caption" className="auth-form__caption-text">
            Already have an account? <Link to="/">Log in</Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RegistrationForm;
