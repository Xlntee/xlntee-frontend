import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Typography } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import { InfoBlock } from "src/shared/ui/info-block";
import { PasswordUpdateForm, PasswordUpdateFormFields } from "./ui";

const PasswordUpdatePage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { t } = useTranslation("auth");

  const [success, setSuccess] = useState<boolean>(false);

  function onSubmitForm(data: PasswordUpdateFormFields): void {
    console.log(data);
    setSuccess(true);
  }

  return (
    <Box component="section" py="40px">
      <Container>
        {!success ? (
          <Box maxWidth="450px" marginInline="auto">
            <Typography variant="h3" mb="20px" textAlign="center">
              {t("credential-update-content.title-password")}
            </Typography>
            <PasswordUpdateForm onSubmit={onSubmitForm} />
          </Box>
        ) : (
          <InfoBlock
            image="/assets/password-update.png"
            title={t("credential-update-content.title-password")}
            email="test@test.com"
          />
        )}
      </Container>
    </Box>
  );
};

export default PasswordUpdatePage;
