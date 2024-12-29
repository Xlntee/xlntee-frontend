import { FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Grid, Button, FormLabel, Typography, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { TextField, RootForm } from "src/shared/ui";
import useAuth from "src/shared/hooks/useAuth";

type ProfileFormFields = {
  firstName: string;
  phone: string;
  lastName: string;
  nickname: string;
  email: string;
  password: string;
  youtube: string;
  facebook: string;
  twitter: string;
  instagram: string;
};

type ProfileFormKeys = keyof ProfileFormFields;

type FieldType = {
  name: ProfileFormKeys;
  label: string;
  placeholder: string;
};

const ProfileForm: FC = () => {
  const { t } = useTranslation("auth");
  const { t: tCommon } = useTranslation("common");
  const { userRole } = useAuth();

  const methods = useForm<ProfileFormFields>({
    mode: "onSubmit"
  });

  const fields: FieldType[] = [
    {
      name: "nickname",
      label: t("nickname-label"),
      placeholder: t("nickname-placeholder")
    },
    {
      name: "phone",
      label: t("phone-label"),
      placeholder: t("phone-placeholder")
    },
    {
      name: "firstName",
      label: t("firstName-label"),
      placeholder: t("firstName-placeholder")
    },
    {
      name: "email",
      label: t("email-label"),
      placeholder: t("email-placeholder")
    },
    {
      name: "lastName",
      label: t("lastName-label"),
      placeholder: t("lastName-placeholder")
    },
    {
      name: "password",
      label: t("password-label"),
      placeholder: t("password-placeholder")
    },
    {
      name: "youtube",
      label: "Youtube",
      placeholder: "https://"
    },
    {
      name: "facebook",
      label: "Facebook",
      placeholder: "https://"
    },
    {
      name: "twitter",
      label: "Twitter",
      placeholder: "https://"
    },
    {
      name: "instagram",
      label: "Instagram",
      placeholder: "https://"
    }
  ];

  function onSubmit(data: ProfileFormFields): void {
    console.log(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Grid container columnSpacing={{ sm: "20px", md: "40px" }} rowGap="20px" mb="20px">
        {fields.map(({ name, label, placeholder }) => (
          <Grid key={name} item xs={12} sm={6}>
            <FormLabel className="field-box">
              <Typography className="field-box__title" mb="8px">
                {label}
              </Typography>
              <Stack direction="row" gap="10px" alignItems="center">
                <TextField
                  name={name}
                  variant="outlined"
                  fullWidth
                  placeholder={placeholder}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                {name === "email" && (
                  <Link to={`/${userRole}/dashboard/email-update`}>
                    <EditIcon />
                  </Link>
                )}
                {name === "password" && (
                  <Link to={`/${userRole}/dashboard/password-update`}>
                    <EditIcon />
                  </Link>
                )}
              </Stack>
            </FormLabel>
          </Grid>
        ))}
      </Grid>
      <Button type="submit" variant="dark-contain" sx={{ minWidth: "140px" }}>
        {tCommon("button-save")}
      </Button>
    </RootForm>
  );
};

export default ProfileForm;
