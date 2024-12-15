import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Button, List, ListItem, FormHelperText } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { CheckboxField, TextField } from "src/shared/ui/form-fields";

import { getInitalAnswerVariant } from "../../store/initialData";
import { LecturesArrayFormValues } from "../block-lecture/validation";

import "./QuizAnswer.scss";

type QuizAnswerListProps = {
  lessonId: string;
  lectureId: string;
  quizId: string;
  lectureIndex: number;
  quizIndex: number;
};

const QuizAnswerList: FC<QuizAnswerListProps> = ({ lectureIndex, quizIndex }) => {
  const { t } = useTranslation("teacher-create-course");

  const {
    control,
    formState: { errors }
  } = useFormContext<LecturesArrayFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `lectures.${lectureIndex}.testConfigurations.${quizIndex}.variants`
  });

  function onAddAnswer(): void {
    const initialData = getInitalAnswerVariant();
    append({
      customId: initialData.id,
      ...initialData
    });
  }

  return (
    <Box>
      <List className="quiz-answer-list">
        {fields.map((variant, index) => (
          <ListItem key={variant.customId}>
            <Box className="quiz-answer">
              <CheckboxField
                name={`lectures.${lectureIndex}.testConfigurations.${quizIndex}.variants.${index}.answer`}
                className="quiz-answer__checkbox"
              />
              <TextField
                name={`lectures.${lectureIndex}.testConfigurations.${quizIndex}.variants.${index}.title`}
                error={
                  !!errors.lectures?.[lectureIndex]?.testConfigurations?.[quizIndex]?.variants?.[index]?.title?.message
                }
                helperText={
                  errors.lectures?.[lectureIndex]?.testConfigurations?.[quizIndex]?.variants?.[index]?.title?.message
                }
                variant="outlined"
                fullWidth
                placeholder={`${t("structure.quiz-answer-field-placeholder")}...`}
                className="text-field-light"
              />
              <Button variant="black-text" size="medium" onClick={() => remove(index)} className="quiz-answer__action">
                <DeleteOutlineIcon />
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box mt="10px" paddingLeft="38px">
        <Button
          variant="black-text"
          size="medium"
          className="quiz-answer-list__action-add-answer"
          onClick={onAddAnswer}
        >
          + {t("structure.lecture-quiz-add-answer")}
        </Button>
      </Box>
      {errors.lectures?.[lectureIndex]?.testConfigurations?.[quizIndex]?.variants?.type && (
        <FormHelperText error={true}>
          {errors.lectures?.[lectureIndex]?.testConfigurations?.[quizIndex]?.variants?.type}
        </FormHelperText>
      )}
    </Box>
  );
};

export default QuizAnswerList;
