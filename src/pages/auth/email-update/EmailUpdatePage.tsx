import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Typography } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import { InfoBlock } from "src/shared/ui/info-block";

import { EmailUpdateForm, EmailUpdateFormFields } from "./ui";

const EmailUpdatePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("auth");

  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail("test@gmail.com");
  }, []);

  function onSubmit(data: EmailUpdateFormFields): void {
    console.log(data);
    setSuccess(true);
  }

  return (
    <Box component="section" py="40px">
      <Container>
        {!success ? (
          <Box maxWidth="450px" marginInline="auto">
            <Typography variant="h3" mb="20px" textAlign="center">
              {t("credential-update-content.title-email")}
            </Typography>
            <EmailUpdateForm oldEmail={email} onSubmit={onSubmit} />
          </Box>
        ) : (
          <InfoBlock
            image="/assets/email-update.png"
            title={t("credential-update-content.title-email")}
            email="test@test.com"
          />
        )}
      </Container>
    </Box>
  );
};

export default EmailUpdatePage;
