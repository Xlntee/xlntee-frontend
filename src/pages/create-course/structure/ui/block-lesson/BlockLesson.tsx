import { FC, useEffect, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import cn from "classnames";

import { Box, Typography, TextField, Checkbox, Stack, FormLabel, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { DialogModal } from "src/features";
import useDialogModal from "src/hooks/useDialogModal";
import { XlnteeColors } from "src/shared/themes/colors";

import { useAppDispatch, useAppSelector } from "src/app/store/store";
import { deleteLesson, selectLessons, updateLesson } from "../../store/lessonsSlice";

import { BlockLecture } from "../block-lecture";

import { lessonSingleValidationSchema, LessonSingleFormValues } from "./validation";
import { getConvertedLessonFormValuesToLesson } from "./utils";

import "./BlockLesson.scss";

interface BlockLessonProps {
  id: string;
  index: number;
  canDelete: boolean;
}

const BlockLesson: FC<BlockLessonProps> = ({ index, id, canDelete }) => {
  const { t } = useTranslation("teacher-create-course");
  const { t: dialogModalT } = useTranslation("dialog-modal");

  const dispatch = useAppDispatch();
  const lessons = useAppSelector(selectLessons);

  const { openModal, onOpenModal, onCloseModal } = useDialogModal();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const formMethods = useForm<LessonSingleFormValues>({
    resolver: yupResolver(lessonSingleValidationSchema),
    mode: "onSubmit"
  });

  const {
    control,
    formState: { errors },
    register,
    setValue,
    handleSubmit
  } = formMethods;

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
    <FormProvider {...formMethods}>
      <Box component="form" className={cn("block-lesson", { "block-lesson--collapsed": isCollapsed })}>
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
          <FormLabel>
            <Stack direction="row" alignItems="center" gap="4px">
              <Checkbox {...register("free")} />
              <Box>
                <Typography variant="body2" color={XlnteeColors.GrayColor600}>
                  {t("structure.free_section")}
                </Typography>
              </Box>
            </Stack>
          </FormLabel>
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
            {...register("title")}
            error={!!errors.title?.message}
            helperText={errors.title?.message}
            id="title"
            variant="outlined"
            fullWidth
            placeholder={`${t("structure.title_lesson_placeholder")}...`}
            // defaultValue={title}
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
              + {t("structure.add_lecture")}
            </Button>
            <Button
              variant="black-contain"
              size="medium"
              className="block-lesson__action-save-lecture"
              onClick={handleSubmit(onSubmit)}
            >
              {t("structure.save_section")}
            </Button>
          </Stack>
        </Box>
        <DialogModal
          open={openModal}
          title={t("structure.dialog_modal_delete_lesson")}
          useCloseButton
          showCloseButtonIcon
          agreeButtonText={dialogModalT("dialog_modal_agree")}
          deleteButtonText={dialogModalT("dialog_modal_disagree")}
          handleAgree={onHandleDeleteLesson}
          handleClose={onCloseModal}
        />
      </Box>
    </FormProvider>
  );
};

export default BlockLesson;
