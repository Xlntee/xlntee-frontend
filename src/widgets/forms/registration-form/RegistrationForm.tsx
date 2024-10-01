import { Link, useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

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

import { AppRoutes } from "src/app/routing/appRoutes";
import { XlnteeColors } from "src/shared/themes/colors";

import { RegistrationFormValues, validationSchema } from "./validation";

import LocalStorageService from "src/shared/local-storage";
import { UserRole } from "src/shared/utils/enum";

const RegistrationForm = () => {
  const { role } = useParams();

  const { t } = useTranslation("auth");
  const navigate = useNavigate();

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
    try {
      LocalStorageService.emailConfirmation("1234", data.email, role as UserRole);
      navigate(AppRoutes.auth.accountVerification);
    } catch (error) {
      console.error(error);
    }
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
          {t("login-with")} Google
        </Button>
        <Button
          aria-label="login with facebook button"
          variant="black-outline"
          className="auth-form__auth-btn"
          startIcon={<FacebookOutlined />}
        >
          {t("login-with")} Facebook
        </Button>
        <TextField
          {...register("email", {
            required: "test error",
          })}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          type="email"
          placeholder={t("email-placeholder")}
        />
        <TextField
          {...register("password")}
          error={!!errors.password?.message}
          type="password"
          placeholder={t("password-placeholder")}
        />
        <TextField
          {...register("confirm_password")}
          error={!!errors.confirm_password?.message}
          helperText={errors.confirm_password?.message}
          type="password"
          placeholder={t("confirm-password-placeholder")}
        />
        <Typography variant="caption" color={XlnteeColors.GrayColor700}>
          {t("password-requirements")} !@#$%^&*()_+/\.-~
        </Typography>
        {!!errors.password?.message && errors.password?.message && (
          <Alert icon={<ErrorIcon />} severity="error">
            {t("password-does-not-match")}
          </Alert>
        )}
        <FormControl error={Boolean(errors.agreement)} className="auth-form__terms-control">
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
                    {t("terms.text")} <a href="#">{t("terms.link")}</a>
                  </Typography>
                }
              />
            )}
          />
          {errors.agreement && <FormHelperText>{errors.agreement.message}</FormHelperText>}
        </FormControl>
        <Button variant="contained" className="auth-form__btn-submit" onClick={handleSubmit(onSubmit)}>
          {t("sign-up")}
        </Button>
        <Stack direction="column" gap="4px" textAlign="center">
          <Typography variant="caption" className="auth-form__caption-text">
            {t("have-account")}? <Link to={`${AppRoutes.auth.login}/${role}`}>{t("login")}</Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RegistrationForm;
