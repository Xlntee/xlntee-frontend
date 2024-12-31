import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack } from "@mui/material";

import { useAppDispatch, useAppSelector } from "src/app/store/store";
import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";

import { addLesson, selectLessons } from "./store/lessonsSlice";
import { BlockLesson } from "./ui";

const StructurePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  const dispatch = useAppDispatch();
  const lessons = useAppSelector(selectLessons);

  function onSave(): void {
    console.log(lessons);
  }

  return (
    <Box className="create-course-structure" mb="20px">
      {lessons.map((lesson, index, arr) => (
        <BlockLesson key={lesson.id} index={index} id={lesson.id} canDelete={arr.length > 1} />
      ))}
      <Button
        variant="dark-outline"
        size="large"
        fullWidth
        className="button-rounded-md"
        onClick={() => dispatch(addLesson())}
        sx={{ mb: "20px" }}
      >
        + {t("structure.add-lesson")}
      </Button>
      <Stack direction={{ sm: "row" }} flexWrap="wrap" gap="20px" mb="20px">
        <Button variant="contained" color="primary" size="large" onClick={onSave} sx={{ minWidth: "150px" }}>
          {tCommon("button-save")}
        </Button>
        <Button variant="dark-text" size="large" disabled>
          {tCommon("button-discard-changes")}
        </Button>
      </Stack>
    </Box>
  );
};

export default StructurePage;
