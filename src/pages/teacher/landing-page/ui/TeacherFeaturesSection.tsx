import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { AppRoutes } from "src/app/routing/appRoutes";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

//TODO: implement refactoring before component’s declaration

const TeacherFeaturesSection = () => {
  const { t } = useTranslation("teacher-landing");
  const CaptionList: string[] = t("teacher-landing.features-section.caption", { returnObjects: true });
  const DescriptionList: string[] = t("teacher-landing.features-section.description", { returnObjects: true });

  return (
    <Box display="flex" flexDirection="row" mb="160px" alignItems="center" gap="20px">
      <Box>
        <Box
          sx={{
            height: "150px",
            width: "26px",
            borderTop: `1px dashed ${XlnteeColors.BlackElementColor}`,
            borderLeft: `1px dashed ${XlnteeColors.BlackElementColor}`,
            borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}`,
          }}
        ></Box>
        <Box
          sx={{
            height: "150px",
            width: "26px",
            borderLeft: `1px dashed ${XlnteeColors.BlackElementColor}`,
            borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}`,
          }}
        ></Box>
      </Box>
      <Box sx={{ maxWidth: "1100px" }}>
        <Grid container sx={{ maxWidth: "100%", boxSizing: "border-box" }}>
          <Grid item xs={4}>
            <Box>
              <Stack direction="row" alignItems="center" gap="10px">
                <TrendingUpOutlinedIcon color="primary" sx={{ fontSize: "20px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px" }}>
                  {CaptionList[0]}
                </Typography>
                <Box sx={{ width: "220px", borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}` }}></Box>
              </Stack>
              <Typography sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "28px" }}>
                {DescriptionList[0]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Stack direction="row" alignItems="center" gap="10px">
                <DashboardOutlinedIcon color="primary" sx={{ fontSize: "22px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px" }}>
                  {CaptionList[1]}
                </Typography>
                <Box sx={{ width: "240px", borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}` }}></Box>
              </Stack>
              <Typography sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "32px" }}>
                {DescriptionList[1]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Stack direction="row" alignItems="center" gap="10px">
                <CreditCardIcon color="primary" sx={{ fontSize: "20px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px" }}>
                  {CaptionList[2]}
                </Typography>
              </Stack>
              <Typography sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "32px" }}>
                {DescriptionList[2]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box pt="65px">
              <Stack direction="row" alignItems="center" gap="10px">
                <SettingsSuggestOutlinedIcon color="primary" sx={{ fontSize: "22px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px" }}>
                  {CaptionList[3]}
                </Typography>
                <Box sx={{ width: "190px", borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}` }}></Box>
              </Stack>
              <Typography sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "31px" }}>
                {DescriptionList[3]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box pt="65px">
              <Stack direction="row" alignItems="center" gap="10px">
                <PlayCircleOutlinedIcon color="primary" sx={{ fontSize: "22px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px" }}>
                  {CaptionList[4]}
                </Typography>
                <Box sx={{ width: "260px", borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}` }}></Box>
              </Stack>
              <Typography sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "32px" }}>
                {DescriptionList[4]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box pt="65px">
              <Stack direction="row" alignItems="center" gap="10px">
                <QuizOutlinedIcon color="primary" sx={{ fontSize: "22px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px" }}>
                  {CaptionList[5]}
                </Typography>
              </Stack>
              <Typography
                sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "32px", whiteSpace: "nowrap" }}
              >
                {DescriptionList[5]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box height="100px" pt="65px">
              <Stack direction="row" alignItems="center" gap="10px">
                <WorkspacePremiumOutlinedIcon color="primary" sx={{ fontSize: "24px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px" }}>
                  {CaptionList[6]}
                </Typography>
                <Box sx={{ width: "190px", borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}` }}></Box>
              </Stack>
              <Typography sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "33px" }}>
                {DescriptionList[6]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box width="350px" height="100px" pt="65px">
              <Stack direction="row" alignItems="center" gap="10px">
                <VisibilityOutlinedIcon color="primary" sx={{ fontSize: "22px" }} />
                <Typography color="primary" sx={{ fontWeight: "400", fontSize: "20px", whiteSpace: "nowrap" }}>
                  {CaptionList[7]}
                </Typography>
                <Box sx={{ width: "170px", borderBottom: `1px dashed ${XlnteeColors.BlackElementColor}` }}></Box>
              </Stack>
              <Typography sx={{ fontWeight: 300, fontSize: "20px", lineHeight: "27px", pl: "31px" }}>
                {DescriptionList[7]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box height="100px" pt="60px">
              <Button
                component={RouterLink}
                to={AppRoutes.auth}
                color="primary"
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  fontFamily: "Noto Sans",
                  padding: "6px 14px",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                {t("teacher-landing.features-section.Button")}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TeacherFeaturesSection;
