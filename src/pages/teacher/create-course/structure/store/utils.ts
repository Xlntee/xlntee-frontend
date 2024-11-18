import { Lecture, TestConfiguraton } from "src/entities/course/model";
import { Lesson } from "src/entities/course/model/lesson";

export const getLessonIndex = (lessons: Lesson[], lessonId: string): number => {
  return lessons.findIndex((lesson: Lesson) => lesson.id === lessonId);
};

export function getLectureIndexes(
  lessons: Lesson[],
  lessonId: string,
  lectureId: string
): { lessonIndex: number; lectureIndex: number } {
  const lessonIndex = getLessonIndex(lessons, lessonId);
  const lectureIndex = lessons[lessonIndex].lectures.findIndex((lecture: Lecture) => lecture.id === lectureId);

  return {
    lessonIndex,
    lectureIndex
  };
}

export const getQuestionIndex = (testConfigurations: TestConfiguraton[], questionId: string): number => {
  return testConfigurations?.findIndex((test: TestConfiguraton) => test.id === questionId);
};
