import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import { PageProps } from "pages/type";
import useTitle from "src/shared/hooks/useTitle";
import { HelpCenterForm, HelpCenterFormFields } from "./ui";

const HelpCenterPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation("auth");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  function onSubmit(data: HelpCenterFormFields): void {
    console.log(data);
    setIsSubmit(true);
  }

  return (
    <Box className="help-center-page" paddingBlock="50px">
      <Container>
        <Box maxWidth="540px" marginInline="auto">
          <Typography variant="h3" textAlign="center" mb="30px">
            {t("help-center.caption")}
          </Typography>
          {isSubmit ? (
            <Stack alignItems="center">
              <CheckIcon
                sx={{
                  fontSize: "250px",
                  color: theme.palette.primary.main
                }}
              />
              <Typography variant="body2" color={theme.palette.primary.main}>
                {t("help-center.info-text")}
              </Typography>
              <Button variant="dark-text" onClick={() => navigate(-1)}>
                {t("help-center.return-btn")} &gt;
              </Button>
            </Stack>
          ) : (
            <Stack maxWidth="880px" margin="0 auto" pb="25px">
              <HelpCenterForm onSubmit={onSubmit} />
            </Stack>
          )}
        </Box>
        <Box textAlign="center">
          <img src="/assets/help-center-image.png" alt={t("help-center.alt-text")} />
        </Box>
      </Container>
    </Box>
  );
};

export default HelpCenterPage;
