import { Box, Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import FooterLinkButton from "./ui/FooterLinkButton";

import { XlnteeColors } from "src/shared/themes/colors";

import "./Footer.scss";

const Footer = () => {
  return (
    <Box component="footer">
      <Container sx={{ borderTop: `1px solid ${XlnteeColors.GrayStrokeColor}` }} className="footer">
        <Box className="footer__container-main-text">
          <Typography variant="body1" className="footer__main-text">
            Ми працюємо над тим, щоб зробити користування платформою якомога зручнішим. Ви можете допомогти нам стати
            кращими
          </Typography>
        </Box>
        <Stack flexDirection="row" alignItems="center" justifyContent="center" gap="20px" flexWrap="wrap">
          <FooterLinkButton path="#">Центр Підтримки</FooterLinkButton>
          <FooterLinkButton path="#">Умови використання</FooterLinkButton>
          <FooterLinkButton path="#">Політика конфіденційності</FooterLinkButton>
          <Stack flexDirection="row" gap="10px" alignItems="center">
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              Зв'яжіться з нами:
            </Typography>
            <FooterLinkButton path="mailto:support@xlntee.com">support@xlntee.com</FooterLinkButton>
          </Stack>
        </Stack>

        <Stack
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          gap={{ lg: "10px" }}
          className="footer__social-network-block"
        >
          <MuiLink sx={{ color: XlnteeColors.BlackElementColor }} href="https://www.instagram.com/" target="_blank">
            <InstagramIcon className="footer__social-network-icon" sx={{ fontSize: "20px" }} />
          </MuiLink>
          <MuiLink sx={{ color: XlnteeColors.BlackElementColor }} href="https://www.linkedin.com/" target="_blank">
            <LinkedInIcon className="footer__social-network-icon" sx={{ fontSize: "20px" }} />
          </MuiLink>
          <MuiLink sx={{ color: XlnteeColors.BlackElementColor }} href="https://www.facebook.com/" target="_blank">
            <FacebookIcon className="footer__social-network-icon" sx={{ fontSize: "20px" }} />
          </MuiLink>
        </Stack>

        <Stack
          flexDirection="row"
          className="footer__cards-images-block"
          display={{
            xs: "none",
            lg: "flex",
          }}
        >
          <img className="footer__cards-image" src="/assets/mastercard-logo.png" />
          <img className="footer__cards-image" src="/assets/visa-logo.png" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
