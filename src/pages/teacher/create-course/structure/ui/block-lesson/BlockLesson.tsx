import { FC, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import cn from "classnames";

import { Box, Typography, Stack, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { DialogModal } from "src/features";
import useDialogModal from "src/hooks/useDialogModal";
import { RootForm } from "src/widgets/forms";
import { CheckboxField, TextField } from "src/features/form-fields";

import { useAppDispatch, useAppSelector } from "src/app/store/store";
import { deleteLesson, selectLessons, updateLesson } from "../../store/lessonsSlice";

import { BlockLecture } from "../block-lecture";
import { lessonSingleValidationSchema, LessonSingleFormValues } from "./validation";
import { getConvertedLessonFormValuesToLesson } from "./utils";

import "./BlockLesson.scss";

type BlockLessonProps = {
  id: string;
  index: number;
  canDelete: boolean;
};

const BlockLesson: FC<BlockLessonProps> = ({ index, id, canDelete }) => {
  const { t } = useTranslation("teacher-create-course");
  const { t: dialogModalT } = useTranslation("dialog-modal");

  const dispatch = useAppDispatch();
  const lessons = useAppSelector(selectLessons);

  const { openModal, onOpenModal, onCloseModal } = useDialogModal();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const methods = useForm<LessonSingleFormValues>({
    resolver: yupResolver(lessonSingleValidationSchema),
    mode: "onSubmit"
  });

  const { control, setValue } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "lectures"
  });

  useEffect(() => {
    setDefaultFormValues();
  }, []);

  function setDefaultFormValues(): void {
    const { id: lessonId, title, lectures } = lessons[0];
    const { id: lectureId, title: lectureTitle } = lectures[0];
    setValue("customId", lessonId);
    setValue("title", title);
    setValue("lectures", [
      {
        customId: lectureId,
        title: lectureTitle
      }
    ]);
  }

  function onSubmit(data: LessonSingleFormValues): void {
    console.log("data", data);
    dispatch(
      updateLesson({
        lessonId: id,
        payload: getConvertedLessonFormValuesToLesson(data)
      })
    );
  }

  function onHandleDeleteLesson(): void {
    dispatch(
      deleteLesson({
        lessonId: id
      })
    );
    onCloseModal();
  }

  function onAddLecture(): void {
    const idValue = uuidv4();
    append({
      customId: idValue,
      title: ""
    });
  }

  return (
    <RootForm
      methods={methods}
      onSubmit={onSubmit}
      className={cn("block-lesson", { "block-lesson--collapsed": isCollapsed })}
    >
      <Stack className="block-lesson__header">
        <Typography variant="h4">
          {t("structure.section")} #{index + 1}
        </Typography>
        <Button
          className={cn("collapse-toggler", { active: isCollapsed })}
          onClick={() => setIsCollapsed((prevState) => !prevState)}
        >
          <ArrowDropUpIcon />
        </Button>
        <CheckboxField name="free" label={t("structure.free-section")} />
        <Box position="absolute" top="4px" right="0">
          {canDelete && (
            <Button
              variant="black-text"
              size="medium"
              className="block-lesson__action-delete"
              onClick={() => onOpenModal(id)}
            >
              <DeleteOutlineIcon />
            </Button>
          )}
        </Box>
      </Stack>
      <Box mb="20px">
        <TextField
          name="title"
          variant="outlined"
          fullWidth
          placeholder={`${t("structure.title-lesson-placeholder")}...`}
        />
      </Box>
      <Box className="block-lesson__body">
        <Stack direction="column" gap="20px" mb="20px">
          {fields.map((lecture, lectureIndex) => (
            <BlockLecture
              key={lecture.customId}
              lessonId={id}
              id={lecture.customId}
              index={lectureIndex}
              onDelete={remove}
            />
          ))}
        </Stack>
        <Stack direction={{ md: "row" }} justifyContent="space-between" gap="10px">
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="block-lesson__action-add-lecture"
            onClick={onAddLecture}
          >
            + {t("structure.add-lecture")}
          </Button>
          <Button type="submit" variant="black-contain" size="medium" className="block-lesson__action-save-lecture">
            {t("structure.save-section")}
          </Button>
        </Stack>
      </Box>
      <DialogModal
        open={openModal}
        title={t("structure.dialog_modal_delete_lesson")}
        showCloseButtonIcon
        primaryButtonText={dialogModalT("dialog_modal_agree")}
        secondaryButtonText={dialogModalT("dialog_modal_disagree")}
        handleAgree={onHandleDeleteLesson}
        handleClose={onCloseModal}
      />
    </RootForm>
  );
};

export default BlockLesson;
