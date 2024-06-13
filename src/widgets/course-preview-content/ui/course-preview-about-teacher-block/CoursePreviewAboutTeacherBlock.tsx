import { Avatar, Box, Stack, Typography } from "@mui/material";

const CoursePreviewAboutTeacherBlock = () => {
  return (
    <Box
      sx={{ width: "100%", minHeight: "378px", bgcolor: "#f9f9f9", border: "1px solid #c4c4c4", borderRadius: "20px" }}
    >
      <Typography
        sx={{ margin: "15px 0 00px 30px", fontFamily: "Noto Sans", fontWeight: 900, fontSize: "34px", color: "#000" }}
      >
        Лектор
      </Typography>
      <Box sx={{ padding: "0 100px 20px 100px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "2px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mb: "20px",
          }}
        >
          <Avatar sx={{ width: 150, height: 150 }} />
          <Typography
            sx={{ fontFamily: "Noto Sans", fontWeight: 400, fontSize: "20px", color: "#333", textAlign: "center" }}
          >
            Віктор Рудько
          </Typography>
          <Stack flexDirection="row" maxWidth="600px" gap="10px" flexWrap="wrap" justifyContent="center">
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontWeight: 400,
                fontSize: "20px",
                color: "#828282",
                bgcolor: "#f3f3f3",
                borderRadius: "20px",
                padding: "3px 15px",
                whiteSpace: "nowrap",
              }}
            >
              Senior Business Analytic
            </Typography>
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontWeight: 400,
                fontSize: "20px",
                color: "#828282",
                bgcolor: "#f3f3f3",
                borderRadius: "20px",
                padding: "3px 15px",
                whiteSpace: "nowrap",
              }}
            >
              MBA
            </Typography>
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontWeight: 400,
                fontSize: "20px",
                color: "#828282",
                bgcolor: "#f3f3f3",
                borderRadius: "20px",
                padding: "3px 15px",
                whiteSpace: "nowrap",
              }}
            >
              Junior SEO manager
            </Typography>
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontWeight: 400,
                fontSize: "20px",
                color: "#828282",
                bgcolor: "#f3f3f3",
                borderRadius: "20px",
                padding: "3px 15px",
                whiteSpace: "nowrap",
              }}
            >
              Middle Product Manager
            </Typography>
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontWeight: 400,
                fontSize: "20px",
                color: "#828282",
                bgcolor: "#f3f3f3",
                borderRadius: "20px",
                padding: "3px 15px",
                whiteSpace: "nowrap",
              }}
            >
              Junior JS developer
            </Typography>
          </Stack>
        </Box>
        <Typography sx={{ fontFamily: "Noto Sans", fontWeight: 400, fontSize: "20px", color: "#000" }}>
          Коли 2012 року Ілля разом з друзями переглянули онлайн-курс Массачусетського Технологічного Університету
          «Circuits and electronics», вони були вражені. У ньому було гарним все — від подачі матеріалу та домашніх
          завдань до електронної книги з доступними поясненнями та яскравими ілюстраціями. В якийсь момент з’явилось
          розуміння, що так повинно бути й в Україні. Що навчання може та має бути цікавим. І що вони зберуть весь свій
          досвід, натхнення та потенціал, щоб зробити щось круте.
        </Typography>
      </Box>
    </Box>
  );
};

export default CoursePreviewAboutTeacherBlock;
