import { FC } from "react";

import { Box, Checkbox, Stack, FormLabel, Typography } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

import "./Quiz.scss";

type QuizQuestion = {
  id: string;
  title: string;
  answer: boolean;
};

interface QuizProps {
  number: number;
  title: string;
  items: QuizQuestion[];
}

const Quiz: FC<QuizProps> = ({ number, title, items }) => {
  return (
    <Box bgcolor={XlnteeColors.LightElementColor} p={{ xs: "20px", lg: "50px 30px" }}>
      <Typography variant="h5" fontWeight={400} ml={{ md: "46px" }} mb="20px">
        {number}. {title}
      </Typography>
      <Stack direction="column" gap="20px">
        {items.map((item, index) => (
          <FormLabel key={item.id} className="quiz-label">
            <Checkbox />
            <Typography variant="caption" className="quiz-label__text">
              {index + 1}. {item.title}
            </Typography>
          </FormLabel>
        ))}
      </Stack>
    </Box>
  );
};

export default Quiz;
