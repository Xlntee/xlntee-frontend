import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Button, Stack, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import { TextField, PasswordField } from "src/features/form-fields";
import { RootForm } from "src/widgets/forms";

import { AppRoutes } from "src/shared/routes";
import LocalStorageService from "src/shared/local-storage";
import { Role, UserRoles } from "src/shared/utils/user-role";
import { PasswordValidationPanel } from "src/features";

import { useValidationSchema } from "./validation";

export type RegistrationFormFields = {
  fullname: string;
  email: string;
  password: string;
};

const RegistrationForm: FC = () => {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  const [role, setRole] = useState<Role>(UserRoles.student);

  const methods = useForm<RegistrationFormFields>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });

  const {
    formState: { errors }
  } = methods;

  function onSubmit(data: RegistrationFormFields): void {
    try {
      LocalStorageService.emailConfirmation("1234", data.email, role);
      navigate(AppRoutes.auth.accountVerification);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit} className="auth-form">
      <Stack direction="row" gap="20px" mb="20px">
        <Button
          variant="black-outline"
          size="medium"
          fullWidth
          startIcon={<SchoolOutlinedIcon />}
          className={cn("auth-form__btn-role button-rounded-sm", {
            active: role === UserRoles.student
          })}
          onClick={() => setRole(UserRoles.student)}
        >
          {t("registration-as-student")}
        </Button>
        <Button
          variant="black-outline"
          size="medium"
          fullWidth
          startIcon={<SchoolOutlinedIcon />}
          className={cn("auth-form__btn-role button-rounded-sm", {
            active: role === UserRoles.teacher
          })}
          onClick={() => setRole(UserRoles.teacher)}
        >
          {t("registration-as-teacher")}
        </Button>
      </Stack>
      <Stack direction="column" gap="20px">
        <TextField name="fullname" aria-label="password input" placeholder={t("fullname-placeholder")} />
        <TextField name="email" type="email" aria-label="email input" placeholder={t("email-placeholder")} />
        <PasswordField
          name="password"
          showErrorMessage={false}
          aria-label="password input"
          placeholder={t("password-placeholder")}
        />
        <PasswordValidationPanel isError={!!errors.password} />
        <Button type="submit" variant="contained" className="auth-form__btn-submit">
          {t("sign-up")}
        </Button>
        <Stack direction="column" gap="4px">
          <Typography variant="caption" className="auth-form__caption-text">
            {t("have-account")}? <Link to={AppRoutes.auth.login}>{t("login")}</Link>
          </Typography>
        </Stack>
      </Stack>
    </RootForm>
  );
};

export default RegistrationForm;
