import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Typography, Stack, Button, Checkbox } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import QuizIcon from "@mui/icons-material/Quiz";

import { getInitialTestConfiguration } from "../../store/initialData";

import { QuizAnswerList } from "../quiz-answer-list";
import { LessonSingleFormValues } from "../block-lesson/validation";

import "./BlockQuiz.scss";
import { TextField } from "src/features/form-fields";

type BlockQuizProps = {
  lessonId: string;
  lectureId: string;
  lectureIndex: number;
  onCloseQuiz: () => void;
};

const BlockQuiz: FC<BlockQuizProps> = ({ lessonId, lectureId, lectureIndex, onCloseQuiz }) => {
  const { t } = useTranslation("teacher-create-course");

  const { control } = useFormContext<LessonSingleFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `lectures.${lectureIndex}.testConfigurations`
  });

  function onAddQuestion(): void {
    const initialData = getInitialTestConfiguration();
    append({
      customId: initialData.id,
      question: initialData.question,
      variants: [
        {
          customId: initialData.variants[0].id,
          ...initialData.variants[0]
        },
        {
          customId: initialData.variants[1].id,
          ...initialData.variants[1]
        }
      ]
    });
  }

  function onDelete(index: number, isAbleDelete: boolean): void {
    remove(index);
    if (isAbleDelete) {
      onCloseQuiz();
    }
  }

  return (
    <Stack className="block-quiz" direction="column" gap="20px">
      <Typography variant="body2" className="block-quiz__info-message">
        {t("structure.lecture-quiz-info-message")}
        <Checkbox checked />
      </Typography>
      {fields?.length
        ? fields.map((item, index, arr) => (
            <Box key={item.customId} className="block-quiz__item">
              <QuizIcon />
              <Box className="quiz-panel">
                <Box className="quiz-question">
                  <Typography variant="body2" className="quiz-question__number">
                    {index + 1}
                  </Typography>
                  <TextField
                    name={`lectures.${lectureIndex}.testConfigurations.${index}.question`}
                    variant="outlined"
                    fullWidth
                    placeholder={`${t("structure.lecture-quiz-question-placeholder")}...`}
                    className="quiz-question__text-field"
                  />
                  <Button
                    variant="black-text"
                    size="medium"
                    className="quiz-question__action"
                    onClick={() => {
                      onDelete(index, arr.length === 1);
                    }}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                </Box>
                {item.variants?.length ? (
                  <QuizAnswerList
                    lessonId={lessonId}
                    lectureId={lectureId}
                    quizId={item.customId}
                    lectureIndex={lectureIndex}
                    quizIndex={index}
                  />
                ) : null}
              </Box>
            </Box>
          ))
        : null}
      <Box pl="34px">
        <Button
          variant="white-contain"
          size="medium"
          className="block-quiz__action-add-quetion"
          onClick={onAddQuestion}
        >
          + {t("structure.lecture-quiz-add-question")}
        </Button>
      </Box>
    </Stack>
  );
};

export default BlockQuiz;
