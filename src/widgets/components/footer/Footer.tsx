import { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

import { Box, Container, Stack, Typography, Link as MuiLink, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import { AppRoutes } from "src/shared/routes";

import "./Footer.scss";

const Footer: FC = () => {
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
              <MuiLink
                aria-label="instagram link"
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <InstagramIcon sx={{ fontSize: "20px" }} />
              </MuiLink>
              <MuiLink
                aria-label="linkedin link"
                href="https://www.linkedin.com/"
                target="_blank"
                className="footer__social-link"
              >
                <LinkedInIcon sx={{ fontSize: "20px" }} />
              </MuiLink>
              <MuiLink
                aria-label="facebook link"
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <FacebookIcon sx={{ fontSize: "20px" }} />
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
            <LazyLoadImage src="/assets/mastercard-logo.webp" alt="mastercard" effect="blur" width={54} height={54} />
            <LazyLoadImage src="/assets/visa-logo.webp" alt="visa" effect="blur" width={54} height={54} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
