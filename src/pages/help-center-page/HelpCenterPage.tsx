import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import useTitle from "src/hooks/useTitle";
import { XlnteeColors } from "src/shared/themes/colors";
import { HelpCenterForm, HelpCenterFormValues } from "src/widgets/forms";
import { PageProps } from "pages/type";

import "./HelpCenterPage.scss";

const HelpCenterPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const navigate = useNavigate();
  const { t } = useTranslation("auth");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  function onSubmit(data: HelpCenterFormValues): void {
    console.log(data);
    setIsSubmit(true);
  }

  //TODO: render button when user not authorized

  return (
    <Box className="help-center-page">
      <Container>
        <Typography className="help-center-page__caption" variant="h2">
          {t("help-center.caption")}
        </Typography>
        {isSubmit ? (
          <Stack alignItems="center">
            <CheckIcon className="help-center-page__check-icon" />
            <Typography variant="caption" color={XlnteeColors.BrandColor}>
              {t("help-center.info-text")}
            </Typography>
            <Button className="help-center-page__return-btn" onClick={() => navigate(-1)}>
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
