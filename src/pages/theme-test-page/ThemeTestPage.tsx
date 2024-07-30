import { Button, Stack, Typography } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";

const ThemeTestPage = () => {
  return (
    <Stack gap={5}>
      <Button color="primary" variant="contained">
        Primary button
      </Button>
      <Button color="secondary" variant="contained">
        Secondary button
      </Button>
      <Button sx={{ bg: XlnteeColors.LinkColor }}>Link button</Button>
      {/* text from prewiev course */}
      <Typography maxWidth={600} variant="body1" sx={{color: XlnteeColors.BlackTextColor}}> 
        Коли 2012 року Ілля разом з друзями переглянули онлайн-курс Массачусетського Технологічного Університету
        «Circuits and electronics», вони були вражені. У ньому було гарним все — від подачі матеріалу та домашніх
        завдань до електронної книги з доступними поясненнями та яскравими ілюстраціями. В якийсь момент з’явилось
        розуміння, що так повинно бути й в Україні. Що навчання може та має бути цікавим. І що вони зберуть весь свій
        досвід, натхнення та потенціал, щоб зробити щось круте.
      </Typography>
    </Stack>
  );
};

export default ThemeTestPage;
