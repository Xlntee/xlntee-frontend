import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import { PageProps } from "pages/type";
import useTitle from "src/shared/hooks/useTitle";
import { HelpCenterForm, HelpCenterFormFields } from "./ui";

import "./HelpCenterPage.scss";

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
    <Box className="help-center-page">
      <Container>
        <Typography className="help-center-page__caption" variant="h2">
          {t("help-center.caption")}
        </Typography>
        {!isSubmit ? (
          <Stack alignItems="center">
            <CheckIcon
              sx={{
                fontSize: "250px",
                color: theme.palette.primary.main
              }}
            />
            <Typography variant="caption" color={theme.palette.primary.main}>
              {t("help-center.info-text")}
            </Typography>
            <Button variant="black-text" className="help-center-page__return-btn" onClick={() => navigate(-1)}>
              {t("help-center.return-btn")} &gt;
            </Button>
          </Stack>
        ) : (
          <Stack maxWidth="880px" margin="0 auto" pb="25px">
            <HelpCenterForm onSubmit={onSubmit} />
          </Stack>
        )}

        <img className="help-center-page__image" src="/assets/help-center-image.png" alt={t("help-center.alt-text")} />
      </Container>
    </Box>
  );
};

export default HelpCenterPage;
