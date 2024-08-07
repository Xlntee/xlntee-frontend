import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { XlnteeColors } from "src/shared/themes/colors";

const ConstactSection = () => {
  const { t } = useTranslation("teacher-landing");

  return (
    <Box sx={{ maxWidth: "812px", mb: "75px" }}>
      <Stack direction="row" alignItems="center" p="0 50px">
        <Stack direction="row" alignItems="center" sx={{ mt: "30px" }}>
          <img src="assets/x-logo-modal.png" width={38} height={38} />
          <Typography sx={{ fontFamily: "Inter", fontWeight: 900, fontStyle: "italic", fontSize: "50px", pr: "20px" }}>
            lntee
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "15px",
            color: `${XlnteeColors.BlackElementColor}`,
            borderLeft: `1px solid ${XlnteeColors.GrayStrokeColor}`,
            pl: "24px",
            mt: "30px",
          }}
        >
          {t("contactSubTitle")}
        </Typography>
        <img src="assets/teacher-landing-contact.png" width={343} height={273} />
      </Stack>
      <Box
        sx={{
          border: `1px solid ${XlnteeColors.BlackTextColor}`,
          borderRadius: "50px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          p: "16.5px 0",
        }}
      >
        <Stack direction="row" alignItems="center" gap="6px">
          <Typography
            sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "22px", color: `${XlnteeColors.BlackElementColor}` }}
          >
            Support
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "22px", color: `${XlnteeColors.LinkColor}` }}
          >
            support@xlntee.com
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="6px">
          <Typography
            sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "22px", color: `${XlnteeColors.BlackElementColor}` }}
          >
            Cooperation
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "22px", color: `${XlnteeColors.LinkColor}` }}
          >
            cooperation@xlntee.com
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="6px">
          <Typography
            sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "22px", color: `${XlnteeColors.BlackElementColor}` }}
          >
            Press
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "22px", color: `${XlnteeColors.LinkColor}` }}
          >
            press@xlntee.com
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ConstactSection;
