import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Typography, Button, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { XlnteeColors } from "src/shared/themes/colors";
import { EmailUpdateForm } from "src/widgets/forms";

import { EmailUpdateFormValues } from "./validation";

import "./EmailUpdatePage.scss";

const EmailUpdatePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("auth");

  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail("test@gmail.com");
  }, []);

  function onSubmit(data: EmailUpdateFormValues): void {
    console.log(data);
    setSuccess(true);
  }

  return (
    <Box component="section" className="section-email-update" py="40px">
      <Container>
        {!success ? (
          <Box maxWidth="450px" marginInline="auto">
            <Typography variant="h3" mb="20px" textAlign="center">
              {t("credential-update-content.title-email")}
            </Typography>
            <EmailUpdateForm oldEmail={email} onSubmit={onSubmit} />
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
                {t("credential-update-content.subtitle", {
                  email: "test@test.com"
                })}
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
