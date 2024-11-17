import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Container, Typography, InputLabel, TextField, Stack, Button, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { XlnteeColors } from "src/shared/themes/colors";
import { getSecureEmail } from "src/shared/utils/methods";

import { FormValues, validationSchema } from "./validation";

import "./EmailUpdatePage.scss";

const EmailUpdatePage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { t } = useTranslation("auth");

  const [email, setEmail] = useState<string>("");

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema(email))
  });

  useEffect(() => {
    setEmail("test@gmail.com");
  }, []);

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
              {t("credential-update-content.title-email")}
            </Typography>
            <Stack gap="20px">
              <Box>
                <InputLabel htmlFor="email">Current email address</InputLabel>
                <TextField
                  id="email"
                  aria-label="email input"
                  type="email"
                  placeholder="Email"
                  value={getSecureEmail(email)}
                  fullWidth
                  disabled
                />
              </Box>
              <Box>
                <InputLabel htmlFor="new_email">New email address</InputLabel>
                <TextField
                  {...register("new_email")}
                  error={!!errors.new_email?.message}
                  helperText={errors.new_email?.message}
                  id="new_email"
                  aria-label="new email input"
                  type="email"
                  placeholder="New email"
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel htmlFor="confirm_email">Confirm new email</InputLabel>
                <TextField
                  {...register("confirm_email")}
                  error={!!errors.confirm_email?.message}
                  helperText={errors.confirm_email?.message}
                  id="confirm_email"
                  aria-label="email input"
                  type="email"
                  placeholder="Confirm new meanil"
                  fullWidth
                />
              </Box>
              <Box textAlign="center">
                <Button type="submit" variant="contained" className="auth-form__btn-submit">
                  Next
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : (
          <Grid container spacing={{ md: "40px" }} my={{ md: "40px" }}>
            <Grid item xs={12} md={5} textAlign={{ xs: "center", md: "left" }}>
              <img src="/assets/email-update.png" alt={t("credential-update-content.title-email")} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" fontWeight={300} fontSize={{ xs: "20px", lg: "30px" }} mb={{ xs: "10px" }}>
                {t("credential-update-content.title-email")}
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

export default EmailUpdatePage;
