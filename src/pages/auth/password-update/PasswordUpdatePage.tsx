import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Container, Typography, InputLabel, TextField, Stack, Button, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { XlnteeColors } from "src/shared/themes/colors";

import { FormValues, validationSchema } from "./validation";

import "./PasswordUpdatePage.scss";

const PasswordUpdatePage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { t } = useTranslation("auth");

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema)
  });

  const [success, setSuccess] = useState<boolean>(false);

  function onSubmitForm(data: FormValues): void {
    console.log(data);
    setSuccess(true);
  }

  return (
    <Box component="section" className="section-email-update" py="40px">
      <Container>
        {!success ? (
          <Box
            component="form"
            maxWidth="450px"
            marginInline="auto"
            className="auth-form"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <Typography variant="h3" mb="20px" textAlign="center">
              {t("credential-update-content.title-password")}
            </Typography>
            <Stack gap="20px">
              <Box>
                <InputLabel htmlFor="current_password">{t("current-password-label")}</InputLabel>
                <TextField
                  {...register("password")}
                  error={!!errors.password?.message}
                  helperText={errors.password?.message}
                  id="current_password"
                  aria-label="current password input"
                  type="password"
                  placeholder={t("current-password-placeholder")}
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel htmlFor="new_password">{t("new-password-label")}</InputLabel>
                <TextField
                  {...register("new_password")}
                  error={!!errors.new_password?.message}
                  helperText={errors.new_password?.message}
                  id="new_password"
                  aria-label="new password input"
                  type="password"
                  placeholder={t("new-password-placeholder")}
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel htmlFor="new_password">{t("confirm-password-label")}</InputLabel>
                <TextField
                  {...register("confirm_password")}
                  error={!!errors.confirm_password?.message}
                  helperText={errors.confirm_password?.message}
                  id="confirm_password"
                  aria-label="confirm password input"
                  type="password"
                  placeholder={t("confirm-password-placeholder")}
                  fullWidth
                />
              </Box>
              <Box textAlign="center">
                <Button type="submit" variant="contained" className="auth-form__btn-submit">
                  {t("button-text")}
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : (
          <Grid container spacing={{ md: "40px" }} my={{ md: "40px" }}>
            <Grid item xs={12} md={5} textAlign={{ xs: "center", md: "left" }}>
              <img src="/assets/password-update.png" alt={t("credential-update-content.title-password")} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" fontWeight={300} fontSize={{ xs: "20px", lg: "30px" }} mb={{ xs: "10px" }}>
                {t("credential-update-content.title-password")}
              </Typography>
              <Typography variant="h3" fontWeight={300} fontSize={{ xs: "16px", lg: "20px" }} mb={{ xs: "10px" }}>
                {t("credential-update-content.subtitle1")}
                test@test.com
                {t("credential-update-content.subtitle2")}
              </Typography>
              <Typography
                fontWeight={300}
                maxWidth={{ md: "480px" }}
                fontSize={{ xs: "16px", lg: "18px" }}
                color={XlnteeColors.GrayColor700}
              >
                {t("credential-update-content.check-email")} {""}
                <Button className="button-link">{t("resend-email")}.</Button>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default PasswordUpdatePage;
