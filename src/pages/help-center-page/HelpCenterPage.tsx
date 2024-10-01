import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

import useTitle from "src/hooks/useTitle/useTitle";
import { XlnteeColors } from "src/shared/themes/colors";

import { PageProps } from "pages/type";

import "./HelpCenterPage.scss";

interface FormData {
  supportFormText: string;
}

const HelpCenterPage = ({ title }: PageProps) => {
  useTitle(title);

  const { t } = useTranslation("auth");

  let navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormData>();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmit(true);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                className="help-center-page__text-field"
                multiline
                fullWidth
                rows={6}
                placeholder={t("help-center.placeholder")}
                {...register("supportFormText", { required: true })}
              />
              <Button type="submit" endIcon={<ArrowForwardIcon />} className="help-center-page__submit-button">
                {t("help-center.submit-btn")}
              </Button>
            </form>
          </Stack>
        )}

        <img className="help-center-page__image" src="/assets/help-center-image.png" alt={t("help-center.alt-text")} />
      </Container>
    </Box>
  );
};

export default HelpCenterPage;
