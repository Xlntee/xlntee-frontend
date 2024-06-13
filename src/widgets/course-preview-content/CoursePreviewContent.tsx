import { Box, Stack } from "@mui/material";
import { Course } from "src/entities/course/model/course";
import CoursePreviewAboutTeacherBlock from "src/widgets/course-preview-content/ui/course-preview-about-teacher-block/CoursePreviewAboutTeacherBlock";
import CoursePreviewDescriptionBlock from "src/widgets/course-preview-content/ui/course-preview-description-block/CoursePreviewDescriptionBlock";
import CoursePreviewInfoBlock from "src/widgets/course-preview-content/ui/course-preview-info-block/CoursePreviewInfoBlock";
import CoursePreviewStructureBlock from "src/widgets/course-preview-content/ui/course-preview-structure-block/CoursePreviewStructureBlock";

const tempAboutCourseInfo = [
  "що таке ООП",
  "Логіка написання коду та основи синтаксису",
  "Основні бібліотеки, як їх використовувати і для чого вони потрібні",
  "З чого почати свій шлях програміста, де набиратись досвіду та на яких платформах",
];

const tempCourseInfo = [
  "Основні навички роботи в РСН",
  "Як працює код, основні поняття про програмування",
  "Що таке мова програмування та де використовується ця мова",
  "Розуміння різниці фрон-енд та бек-енд розробки",
];

interface CoursePreviewContentProps {
  courseData: Course;
}

const CoursePreviewContent: React.FC<CoursePreviewContentProps> = ({ courseData }) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "24px 0 146px 0",
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <CoursePreviewInfoBlock header={"Курс навчає:"} info={tempAboutCourseInfo} />
        <CoursePreviewInfoBlock header={"Що потрібно знати:"} info={tempCourseInfo} />
      </Stack>
      <CoursePreviewStructureBlock />
      <CoursePreviewDescriptionBlock courseDescription={courseData.landingSetting.description} />
      <CoursePreviewAboutTeacherBlock />
    </Box>
  );
};

export default CoursePreviewContent;
