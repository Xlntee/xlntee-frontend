import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Box, Stack, Typography, Container, Grid } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";
import { ContactsLinks } from "src/shared/config/LinkConstants";
import { ContactList, ContactLinkType } from "./ui";

import "./SectionLandingContact.scss";

const links: ContactLinkType[] = [
  {
    title: "Support",
    link: `mailto:${ContactsLinks.Support}`,
  },
  {
    title: "Cooperation",
    link: `mailto:${ContactsLinks.Cooperation}`,
  },
  {
    title: "Press",
    link: `mailto:${ContactsLinks.Press}`,
  },
];

const SectionLandingContact = () => {
  const { t } = useTranslation("teacher-landing");

  return (
    <Box component="section" className="section-contact" py="40px">
      <Container>
        <Box maxWidth="820px" marginX="auto">
          <Grid container alignItems={{ md: "center" }} justifyContent={{ md: "space-between" }}>
            <Grid item xs={12} md={6}>
              <Stack
                direction={{ md: "row" }}
                alignItems="center"
                justifyContent={{ xs: "center", md: "start" }}
                gap={{ md: "40px" }}
                pl={{ md: "56px" }}
                pt={{ md: "34px" }}
                mb={{ xs: "20px", md: "0" }}
              >
                <img
                  src="assets/x-logo-modal-extend.png"
                  width={175}
                  height={64}
                  alt={t("teacher-landing.contactSubTitle")}
                />
                <Typography variant="body2" fontWeight={300} color={XlnteeColors.BlackElementColor}>
                  {t("teacher-landing.contactSubTitle")}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
              <LazyLoadImage
                src="assets/teacher-landing-contact.webp"
                effect="blur"
                className="section-contact__image"
              />
            </Grid>
          </Grid>
          <ContactList items={links} />
        </Box>
      </Container>
    </Box>
  );
};

export default SectionLandingContact;
