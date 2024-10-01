import { Link } from "react-router-dom";

import { Box, Container, Stack, Typography, Link as MuiLink, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import { XlnteeColors } from "src/shared/themes/colors";

import "./Footer.scss";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "src/app/routing/appRoutes";

const Footer = () => {
  //TODO: add links
  const { t } = useTranslation("common");

  return (
    <Box component="footer">
      <Container className="footer">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={2}>
            <Stack
              gap="10px"
              display="flex"
              flexDirection="row"
              alignItems={{ xs: "center", lg: "flex-start" }}
              justifyContent={{ xs: "center", lg: "flex-start" }}
            >
              <MuiLink color={XlnteeColors.BlackElementColor} href="https://www.instagram.com/" target="_blank">
                <InstagramIcon className="footer__social-network-icon" sx={{ fontSize: "20px" }} />
              </MuiLink>
              <MuiLink color={XlnteeColors.BlackElementColor} href="https://www.linkedin.com/" target="_blank">
                <LinkedInIcon className="footer__social-network-icon" sx={{ fontSize: "20px" }} />
              </MuiLink>
              <MuiLink color={XlnteeColors.BlackElementColor} href="https://www.facebook.com/" target="_blank">
                <FacebookIcon className="footer__social-network-icon" sx={{ fontSize: "20px" }} />
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box className="footer__container-main-text">
              <Typography variant="caption" fontWeight={300}>
                {t("footer.main-text")}
              </Typography>
            </Box>
            <Stack flexDirection="row" alignItems="center" justifyContent="center" gap="20px" flexWrap="wrap">
              <Link className="footer__link" to={AppRoutes.helpCenter}>
                {t("footer.help-center-link")}
              </Link>
              <Link className="footer__link" to="#">
                {t("footer.terms-of-use-link")}
              </Link>
              <Link className="footer__link" to="#">
                {t("footer.privacy-policy-link")}
              </Link>
              <Typography variant="caption">
                {t("footer.contact-us-text")}
                {": "}
                <MuiLink sx={{ textDecoration: "none" }} href="mailto:support@xlntee.com">
                  support@xlntee.com
                </MuiLink>
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            lg={2}
            display="flex"
            alignItems={{ xs: "center", lg: "flex-end" }}
            justifyContent={{ xs: "center", lg: "flex-end" }}
          >
            <img className="footer__cards-image" src="/assets/mastercard-logo.png" />
            <img className="footer__cards-image" src="/assets/visa-logo.png" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
