import { Box, Button, Container, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Rating } from "src/features";
import { Course } from "src/entities/course/model";

interface SectionCoursePreviewHeaderProps {
  courseData: Course;
}

const SectionCoursePreviewHeader: React.FC<SectionCoursePreviewHeaderProps> = ({ courseData }) => {
  return (
    <Box sx={{ bgcolor: "#000", pb: "25px" }}>
      <Container sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <TextField
          variant="outlined"
          placeholder="Пошук..."
          fullWidth
          sx={{
            bgcolor: "#191919",
            borderRadius: "5px",
            margin: "20px 0",
            "& .MuiInputBase-input": {
              color: "#7e7e7e",
              fontSize: "20px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#7e7e7e" }} />
              </InputAdornment>
            ),
          }}
        />
        <Stack flexDirection="row" justifyContent="space-between">
          <Box>
            <Stack flexDirection="row" gap="12px">
              <AccountCircle sx={{ width: "50px", height: "50px", color: "white" }} />
              <Box sx={{ maxWidth: "520px", pt: "10px" }}>
                <Typography sx={{ fontFamily: "Noto Sans", fontWeight: 700, fontSize: "20px", color: "#4f6eff" }}>
                  @lenaLurn
                </Typography>
                <Typography sx={{ fontFamily: "Noto Sans", fontWeight: 700, fontSize: "20px", color: "#fff" }}>
                  {courseData.generalSetting.title}
                </Typography>
                <Typography sx={{ fontFamily: "Noto Sans", fontWeight: 400, fontSize: "20px", color: "#fff" }}>
                  {courseData.generalSetting.subTitle}
                </Typography>
                <Box sx={{ padding: "5px 0" }}>
                  <Rating size="large" rating={4.8} />
                </Box>
                <Stack flexDirection="column" gap="10px">
                  <Box sx={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <UpdateOutlinedIcon sx={{ color: "#fff" }} />
                    <Typography
                      sx={{ fontFamily: "Noto Sans", fontWeight: 300, fontSize: "20px", color: "#fff", mr: 10 }}
                    >
                      10.10.2020
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <LanguageOutlinedIcon sx={{ color: "#fff" }} />
                    <Typography
                      sx={{ fontFamily: "Noto Sans", fontWeight: 300, fontSize: "20px", color: "#fff", mr: 10 }}
                    >
                      {courseData.generalSetting.language}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <EqualizerIcon sx={{ color: "#fff" }} />
                    <Typography
                      sx={{ fontFamily: "Noto Sans", fontWeight: 300, fontSize: "20px", color: "#fff", mr: 10 }}
                    >
                      {courseData.generalSetting.level}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <WatchLaterOutlinedIcon sx={{ color: "#fff" }} />
                    <Typography
                      sx={{ fontFamily: "Noto Sans", fontWeight: 300, fontSize: "20px", color: "#fff", mr: 10 }}
                    >
                      75 годин
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "9px", alignItems: "center" }}>
                    <LocalActivityIcon sx={{ color: "#fff" }} />
                    <Typography
                      sx={{ fontFamily: "Noto Sans", fontWeight: 300, fontSize: "20px", color: "#fff", mr: 10 }}
                    >
                      {courseData.generalSetting.generateCertificate
                        ? "Видається сертифікат"
                        : "Сертифікат не видається"}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ width: "578px", height: "405px", border: "1px solid #333", borderRadius: "20px", p: "16px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", mb: "10px" }}>
              <Box sx={{ width: "450px", height: "253px", borderRadius: "20px", bgcolor: "royalblue" }}>
                відео плеєр
              </Box>
              <Stack flexDirection="column" gap="20px">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "82px",
                    height: "45px",
                    borderRadius: "20px",
                    bgcolor: "#ff135a",
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "24px" }}>-24%</Typography>
                </Box>
                <IconButton aria-label="share">
                  <ShareIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </IconButton>
                <IconButton aria-label="add to favorite">
                  <FavoriteBorderIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </IconButton>
                <IconButton aria-label="add to cart">
                  <AddShoppingCartIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </IconButton>
              </Stack>
            </Box>
            <TextField
              placeholder="Введіть промокод"
              fullWidth
              size="small"
              sx={{
                mb: "10px",
                bgcolor: "#333",
                borderRadius: "15px",
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: "20px",
                  textAlign: "center",
                },
              }}
            />
            <Stack flexDirection="row" gap="15px">
              <Typography
                sx={{
                  bgcolor: "#333",
                  textAlign: "center",
                  fontSize: "34px",
                  fontWeight: 400,
                  color: "#f9f9f9",
                  borderRadius: "15px",
                  padding: "2px 15px",
                  textDecorationLine: "line-through",
                }}
              >
                1, 999
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#ffd913",
                  textAlign: "center",
                  fontSize: "34px",
                  fontWeight: 700,
                  color: "#333",
                  borderRadius: "15px",
                  padding: "2px 15px",
                }}
              >
                ₴ 999
              </Typography>
              <Button variant="contained" sx={{ bgcolor: "#643dff", borderRadius: "15px", flex: 1 }}>
                Купити зараз
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionCoursePreviewHeader;
