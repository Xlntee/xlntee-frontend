import { useTranslation } from "react-i18next";

import { Box, Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "src/app/store/store";
import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

import { addLesson, selectLessons } from "./store/lessonsSlice";
import { BlockLesson } from "./ui";

import "./Structure.scss";

const StructurePage = ({ title }: PageProps) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");

  const dispatch = useAppDispatch();
  const lessons = useAppSelector(selectLessons);

  function onSave() {
    console.log(lessons);
  }

  return (
    <Box className="create-course-structure">
      {lessons.map((lesson, index, arr) => (
        <BlockLesson key={lesson.id} index={index} id={lesson.id} canDelete={arr.length > 1} />
      ))}
      <Button
        variant="black-outline"
        size="medium"
        fullWidth
        className="create-course-structure__action-add-lesson"
        onClick={() => dispatch(addLesson())}
      >
        + {t("structure.add_lesson")}
      </Button>
      <Button variant="black-contain" size="large" className="create-course-structure__action-save" onClick={onSave}>
        {t("button_save")}
      </Button>
    </Box>
  );
};

export default StructurePage;
