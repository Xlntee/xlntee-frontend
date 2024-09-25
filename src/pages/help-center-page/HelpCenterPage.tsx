import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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

  let navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormData>();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmit(true);
  };

  //TODO: render button when user not authorized
  //TODO: localization

  return (
    <Box className="help-center-page">
      <Container>
        <Typography className="help-center-page__caption" variant="h2">
          Як ми можемо вам допомогти?
        </Typography>
        {isSubmit ? (
          <Stack alignItems="center">
            <CheckIcon sx={{ fontSize: "250px", color: XlnteeColors.BrandColor }} />
            <Typography variant="body1" sx={{ color: XlnteeColors.BrandColor, fontSize: "14px" }}>
              Дякуємо! Ваш запит надіслано
            </Typography>
            <Button
              onClick={() => navigate(-1)}
              sx={{
                borderRadius: "50px",
                px: "36px",
                color: XlnteeColors.BlackElementColor,
                fontWeight: "400",
              }}
            >
              На головну &gt;
            </Button>
          </Stack>
        ) : (
          <Stack maxWidth="880px" margin="0 auto" pb="25px">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                className="help-center-page__text-field"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                    border: "1px solid #dbe9fe",
                    height: "auto",
                  },
                }}
                multiline
                fullWidth
                rows={6}
                placeholder="Напишіть нам"
                {...register("supportFormText", { required: true })}
              />
              <Button type="submit" endIcon={<ArrowForwardIcon />} className="help-center-page__submit-button">
                Надіслати
              </Button>
            </form>
          </Stack>
        )}

        <img className="help-center-page__image" src="/assets/help-center-image.png" />
      </Container>
    </Box>
  );
};

export default HelpCenterPage;
