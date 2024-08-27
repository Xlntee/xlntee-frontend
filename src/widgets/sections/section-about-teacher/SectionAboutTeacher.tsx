import { Avatar, Box, Stack, Container, Typography } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";
import { Skills } from "./ui";

const SectionAboutTeacher = () => {
  const skills = [
    "Senior Business Analytic",
    "MBA",
    "Junior SEO manager",
    "Middle Product Manager",
    "Junior JS developer",
  ];

  return (
    <Box component="section" className="section-about-teacher">
      <Container>
        <Box
          gap="20px"
          p={{ xs: "20px", md: "26px 32px" }}
          borderRadius="20px"
          bgcolor={XlnteeColors.GrayColor800}
          border={`1px solid ${XlnteeColors.GrayColor400}`}
        >
          <Typography variant="h2" fontWeight={400}>
            Лектор
          </Typography>
          <Box maxWidth="1080px" mx="auto">
            <Stack direction="column" alignItems="center" gap="10px" mb="20px">
              <Avatar sx={{ width: 150, height: 150 }} />
              <Typography variant="body1" textAlign="center">
                Віктор Рудько
              </Typography>
              <Box maxWidth="600px" mx="auto">
                <Skills items={skills} />
              </Box>
            </Stack>
            <Typography variant="body1">
              Коли 2012 року Ілля разом з друзями переглянули онлайн-курс Массачусетського Технологічного Університету
              «Circuits and electronics», вони були вражені. У ньому було гарним все — від подачі матеріалу та домашніх
              завдань до електронної книги з доступними поясненнями та яскравими ілюстраціями. В якийсь момент з’явилось
              розуміння, що так повинно бути й в Україні. Що навчання може та має бути цікавим. І що вони зберуть весь
              свій досвід, натхнення та потенціал, щоб зробити щось круте.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionAboutTeacher;
