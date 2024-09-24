import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

import useTitle from "src/hooks/useTitle/useTitle";
import { XlnteeColors } from "src/shared/themes/colors";

import { PageProps } from "pages/type";

import "./HelpCenterPage.scss";

const HelpCenterPage = ({ title }: PageProps) => {
  useTitle(title);

  let navigate = useNavigate();

  const [textFieldText, setTextFieldText] = useState("");
  const [isSubmit, SetIsSubmit] = useState(false);

  const handleSubmit = () => {
    SetIsSubmit(true);
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
          <Stack
            paddingInline={{
              xs: "0",
              sm: "0",
              md: "50px",
              lg: "200px",
              xl: "200px",
            }}
            alignItems="center"
            pb="25px"
          >
            <TextField
              className="help-center-page__textField"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  border: "1px solid #dbe9fe",
                },
              }}
              multiline
              fullWidth
              rows={6}
              placeholder="Напишіть нам"
              value={textFieldText}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTextFieldText(event.target.value);
              }}
            />
            <Button onClick={handleSubmit} endIcon={<ArrowForwardIcon />} className="help-center-page__submitBtn">
              Надіслати
            </Button>
          </Stack>
        )}

        <img className="help-center-page__static-image" src="/assets/help-center-image.png" />
      </Container>
    </Box>
  );
};

export default HelpCenterPage;
