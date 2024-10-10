import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import { AppRoutes } from "src/app/routing/appRoutes";
import LocalStorageService from "src/shared/local-storage";
import { UserRole } from "src/shared/utils/enum";
import { PasswordValidationPanel } from "src/features";

import { RegistrationFormValues, validationSchema } from "./validation";

const RegistrationForm = () => {
  const [role, setRole] = useState<UserRole>(UserRole.STUDENT);

  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  const {
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
      <Stack direction="row" gap="20px" mb="20px">
        <Button
          variant="black-outline"
          size="small"
          startIcon={<SchoolOutlinedIcon />}
          className={cn("auth-form__btn-role", {
            active: role === UserRole.STUDENT,
          })}
          onClick={() => setRole(UserRole.STUDENT)}
        >
          {t("as")}
          {""} {t("role-student")}
        </Button>
        <Button
          variant="black-outline"
          size="small"
          startIcon={<SchoolOutlinedIcon />}
          className={cn("auth-form__btn-role", {
            active: role === UserRole.TEACHER,
          })}
          onClick={() => setRole(UserRole.TEACHER)}
        >
          {t("as")}
          {""} {t("role-teacher")}
        </Button>
      </Stack>
      <Stack direction="column" gap="20px">
        <TextField
          {...register("fullName", {
            required: "test error",
          })}
          error={!!errors.fullName?.message}
          helperText={errors.fullName?.message}
          type="text"
          placeholder={t("fullname-placeholder")}
        />
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
        <PasswordValidationPanel isError={!!errors.password} />
        <Button variant="contained" className="auth-form__btn-submit" onClick={handleSubmit(onSubmit)}>
          {t("sign-up")}
        </Button>
        <Stack direction="column" gap="4px">
          <Typography variant="caption" className="auth-form__caption-text">
            {t("have-account")}? <Link to={AppRoutes.auth.login}>{t("login")}</Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RegistrationForm;
