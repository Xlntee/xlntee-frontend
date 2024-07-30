import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import FooterCaptionComponent from "./ui/FooterCaptionComponent";
import FooterButtonComponent from "./ui/FooterButtonComponent";
import FooterLinkComponent from "./ui/FooterLinkComponent";
import FooterTextComponent from "./ui/FooterTextComponent";
import { useState } from "react";
import TeacherModal from "../teacher-modal/TeacherModal";
import StudentModal from "../student-modal/StudentModal";
import InformationModal from "../information-modal/InformationModal";
import ViolationModal from "../violation-modal/ViolationModal";

const Footer = () => {
  const [openTeacherModal, setOpenTeacherModal] = useState(false);

  const handleOpenTeacherModal = () => setOpenTeacherModal(true);
  const handleCloseTeacherModal = () => setOpenTeacherModal(false);

  const [openStudentModal, setOpenStudentModal] = useState(false);
  const handleOpenStudentModal = () => setOpenStudentModal(true);
  const handleCloseStudentModal = () => setOpenStudentModal(false);

  const [openInformationModal, setOpenInformationModal] = useState(false);
  const handleOpenInformationModal = () => setOpenInformationModal(true);
  const handleCloseInformationModal = () => setOpenInformationModal(false);

  const [openViolationModal, setOpenViolationModal] = useState(false);
  const handleOpenViolationModal = () => setOpenViolationModal(true);
  const handleCloseViolationModal = () => setOpenViolationModal(false);

  return (
    <Box sx={{ bgcolor: "#0f0f0f", minHeight: "315px" }}>
      <TeacherModal open={openTeacherModal} handleClose={handleCloseTeacherModal} />
      <StudentModal open={openStudentModal} handleClose={handleCloseStudentModal} />
      <InformationModal open={openInformationModal} handleClose={handleCloseInformationModal} />
      <ViolationModal open={openViolationModal} handleClose={handleCloseViolationModal} />
      <Container sx={{ maxWidth: "1200px" }}>
        <Box sx={{ display: "flex", pt: "20px", justifyContent: "space-between" }}>
          <Stack gap="12px">
            <FooterCaptionComponent sx={{ marginBottom: "8px" }}>Продукт</FooterCaptionComponent>
            <FooterButtonComponent onClick={handleOpenTeacherModal}>Викладати</FooterButtonComponent>
            <FooterButtonComponent onClick={handleOpenStudentModal}>Навчатися</FooterButtonComponent>
          </Stack>
          <Stack gap="12px">
            <FooterCaptionComponent sx={{ marginBottom: "8px" }}>Компанія</FooterCaptionComponent>
            <FooterButtonComponent onClick={handleOpenInformationModal}>
              <Stack flexDirection="row" alignItems="center">
                <Typography sx={{ fontFamily: "Noto Sans", fontWeight: 300, fontSize: "16px", mr: "5px" }}>
                  Про
                </Typography>
                <img width={15} height={15} src="/assets/x-logo-picturesSection.png" />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 900, fontStyle: "italic", fontSize: "18px" }}>
                  lntee
                </Typography>
              </Stack>
            </FooterButtonComponent>
            <FooterLinkComponent to="#">
              Умови <br />
              використання
            </FooterLinkComponent>
            <FooterLinkComponent to="#">
              Політика <br />
              конфіденційності
            </FooterLinkComponent>
            <FooterButtonComponent onClick={handleOpenViolationModal}>
              Повідомити
              <br /> про порушення
            </FooterButtonComponent>
          </Stack>
          <Stack gap="12px">
            <FooterCaptionComponent sx={{ marginBottom: "8px" }}>Спільнота</FooterCaptionComponent>
            <FooterLinkComponent to="#">Блог</FooterLinkComponent>
            <FooterCaptionComponent sx={{ margin: "8px 0" }}>Підтримка</FooterCaptionComponent>
            <FooterTextComponent>Support@xlntee.com</FooterTextComponent>
          </Stack>
          <Stack gap="20px">
            <FooterCaptionComponent>Контакти</FooterCaptionComponent>
            <Stack>
              <FooterTextComponent sx={{ fontSize: "17px", fontWeight: 400, mb: "5px" }}>Співпраця</FooterTextComponent>
              <FooterTextComponent>+380987654321</FooterTextComponent>
              <FooterTextComponent>cooperation@xlntee.com</FooterTextComponent>
            </Stack>
            <Stack>
              <FooterTextComponent sx={{ fontSize: "17px", fontWeight: 400, mb: "5px" }}>Преса</FooterTextComponent>
              <FooterTextComponent>+380987654321</FooterTextComponent>
              <FooterTextComponent>press@xlntee.com</FooterTextComponent>
            </Stack>
          </Stack>
          <Stack sx={{ maxWidth: "390px" }}>
            <Stack flexDirection="row" alignItems="center" gap="15px">
              <Stack flexDirection="row" alignItems="center">
                <img src="/assets/x-logo-picturesSection.png" width={40} height={40} />
                <Typography
                  sx={{ fontFamily: "Inter", fontWeight: 900, fontStyle: "italic", fontSize: "45px", color: "#fff" }}
                >
                  lntee
                </Typography>
              </Stack>
              <MuiLink sx={{ color: "#fff" }} href="https://www.instagram.com/" target="_blank">
                <InstagramIcon sx={{ fontSize: "35px", transition: "color 0.3s ease", "&:hover": { color: "#ccc" } }} />
              </MuiLink>
              <MuiLink sx={{ color: "#fff" }} href="https://www.linkedin.com/" target="_blank">
                <LinkedInIcon sx={{ fontSize: "35px", transition: "color 0.3s ease", "&:hover": { color: "#ccc" } }} />
              </MuiLink>
              <MuiLink sx={{ color: "#fff" }} href="https://www.facebook.com/" target="_blank">
                <FacebookIcon sx={{ fontSize: "35px", transition: "color 0.3s ease", "&:hover": { color: "#ccc" } }} />
              </MuiLink>
            </Stack>
            <Typography sx={{ fontFamily: "Noto Sans", fontWeight: 300, fontSize: "20px", color: "#fff", mb: "55px" }}>
              xlntee.com це відкрита платформа знань, знаючі - навчають, амбітні - навчаються
            </Typography>
            <Stack flexDirection="row" alignSelf="flex-end">
              <img width={100} height={100} src="/assets/mastercard-logo.png" />
              <img width={100} height={100} src="/assets/visa-logo.png" />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
