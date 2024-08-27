import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import OnboardingSwiper from "./onboarding-swiper/OnboardingSwiper";
import { XlnteeColors } from "src/shared/themes/colors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  height: "803px",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
};

const OnboardingModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSetIsLastSlide = () => {
    setIsLastSlide(true);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open onboarding modal</Button>
      <Modal open={open}>
        <Box sx={style}>
          <Box
            sx={{
              padding: "50px 0",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src="assets/onboarding-logo.png" alt="onboarding logo" style={{ marginBottom: "30px" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", mb: "50px" }}>
              <img src="assets/onboarding-smile.png" alt="onboarding smile" />
              <Typography sx={{ fontFamily: "Inter", fontWeight: 300, fontSize: "20px" }}>
                Привіт! раді тебе бачити на xlntee.com - твій простір розвитку
              </Typography>
            </Box>
            <Box sx={{ width: "585px", overflow: "hidden" }}>
              <OnboardingSwiper handleSetIsLastSlide={handleSetIsLastSlide} />
            </Box>
          </Box>
          {isLastSlide && (
            <Button sx={{ position: "absolute", top: 0, right: 0 }}>
              <CloseIcon fontSize="large" sx={{ color: XlnteeColors.GrayColor400 }} onClick={handleClose} />
            </Button>
          )}
          {isLastSlide && (
            <Button
              sx={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "24px",
                color: "#828282",
                textTransform: "capitalize",
              }}
              onClick={handleClose}
            >
              Пропустити
            </Button>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default OnboardingModal;
