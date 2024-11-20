import { FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Container, Grid, Button, TextField, FormLabel, Typography, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { getUserRole } from "src/app/store/slices/user/selectors";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { ImageUpload } from "src/features";

interface ProfileFormValues {
  firstName: string;
  phone: string;
  lastName: string;
  nickname: string;
  email: string;
  password: string;
}

type ProfileFormKeys = keyof ProfileFormValues;

type FieldProps = {
  key: ProfileFormKeys;
  label: string;
  placeholder: string;
};

const ProfilePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("auth");
  const { t: tCommon } = useTranslation("common");

  const fields: FieldProps[] = [
    {
      key: "nickname",
      label: t("nickname-label"),
      placeholder: t("nickname-placeholder")
    },
    {
      key: "phone",
      label: t("phone-label"),
      placeholder: t("phone-placeholder")
    },
    {
      key: "firstName",
      label: t("firstName-label"),
      placeholder: t("firstName-placeholder")
    },
    {
      key: "email",
      label: t("email-label"),
      placeholder: t("email-placeholder")
    },
    {
      key: "lastName",
      label: t("lastName-label"),
      placeholder: t("lastName-placeholder")
    },
    {
      key: "password",
      label: t("password-label"),
      placeholder: t("password-placeholder")
    }
  ];

  const { register, handleSubmit } = useForm<ProfileFormValues>({
    mode: "onSubmit"
  });

  function onSubmit(data: ProfileFormValues): void {
    console.log(data);
  }

  return (
    <Box component="section" py="40px">
      <Container>
        <Box maxWidth="800px" marginInline="auto">
          <Box maxWidth={{ xs: "100px", md: "140px" }} marginInline="auto" mb="20px">
            <ImageUpload viewType="avatar" buttonText={tCommon("upload-button")} />
          </Box>
          <Grid container columnSpacing={{ sm: "20px", md: "40px" }}>
            {fields.map((field) => (
              <Grid key={field.key} item xs={12} sm={6}>
                <FormLabel className="field-box">
                  <Typography mb="8px" variant="body2" className="field-box__title">
                    {field.label}
                  </Typography>
                  <Stack direction="row" gap="10px" alignItems="center">
                    <TextField
                      {...register(field.key)}
                      variant="outlined"
                      fullWidth
                      placeholder={field.placeholder}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                    {field.key === "email" && (
                      <Link to={`${getUserRole}/dashboard/email-update`}>
                        <EditIcon />
                      </Link>
                    )}
                    {field.key === "password" && (
                      <Link to={`${getUserRole}/dashboard/password-update`}>
                        <EditIcon />
                      </Link>
                    )}
                  </Stack>
                </FormLabel>
              </Grid>
            ))}
          </Grid>
          <Button variant="black-contain" sx={{ minWidth: "140px" }} onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;
