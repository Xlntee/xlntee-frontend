import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { XlnteeColors } from "src/shared/themes/colors";
import { ContactsLinks } from "src/shared/config/LinkConstants";
import { ContactItem } from "./ui";

const LandingContactSection = () => {
  const { t } = useTranslation("teacher-landing");

  return (
    <Box sx={{ maxWidth: "812px", mb: 9 }}>
      <Stack direction="row" alignItems="center" px={6.5}>
        <Stack direction="row" alignItems="center" mt={4}>
          <img src="assets/x-logo-modal.png" width={38} height={38} />
          <Typography sx={{ fontFamily: "Inter", fontWeight: 900, fontStyle: "italic", pr: "20px" }} variant="h3">
            lntee
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontWeight: 300,
            color: `${XlnteeColors.BlackElementColor}`,
            borderLeft: `1px solid ${XlnteeColors.GrayStrokeColor}`,
            pl: 3,
            mt: 4,
          }}
          variant="body1"
        >
          {t("teacher-landing.contactSubTitle")}
        </Typography>
        <img src="assets/teacher-landing-contact.png" alt={t("teacher-landing.contactImageAltText")} />
      </Stack>
      <Box
        sx={{
          border: `1px solid ${XlnteeColors.BlackTextColor}`,
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          py: 2,
        }}
      >
        <ContactItem caption="Support" link={ContactsLinks.Support} />
        <ContactItem caption="Cooperation" link={ContactsLinks.Cooperation} />
        <ContactItem caption="Press" link={ContactsLinks.Press} />
      </Box>
    </Box>
  );
};

export default LandingContactSection;
