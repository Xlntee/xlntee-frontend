import { TestConfiguraton, TestConfiguratonVariant } from "src/entities/course/model/tests";
import { Lesson } from "src/entities/course/model/lesson";
import { LessonSingleFormValues } from "./validation";
import { TestConfiguratonSingleFormValues } from "../block-quiz/validation";
import { Lecture } from "src/entities/course/model";
import { LectureSingleFormValues } from "../block-lecture/validation";
import { VariantSingleFormValues } from "../quiz-answer-list/validation";

export function getConvertedLessonFormValuesToLesson(lesson: LessonSingleFormValues): Lesson {
  const { customId, lectures, ...rest } = lesson;

  return {
    id: customId,
    lectures: getConvretedLectureFormValuesToLecture(lectures as LectureSingleFormValues[]),
    ...rest
  };
}

function getConvretedLectureFormValuesToLecture(lectures: LectureSingleFormValues[] | undefined): Lecture[] {
  if (!lectures?.length) return [];

  const convertedArray: Lecture[] = lectures.map((item) => {
    const { testConfigurations, customId, files, video, ...rest } = item;
    const lecture: Lecture = {
      id: customId,
      files: files as string[],
      video: video as string | undefined,
      testConfigurations: getConvertedTestConfigFormValuesToTestConfig(
        testConfigurations as TestConfiguratonSingleFormValues[]
      ),
      ...rest
    };

    return lecture;
  });

  return convertedArray;
}

function getConvertedTestConfigFormValuesToTestConfig(
  testConfiguraton?: TestConfiguratonSingleFormValues[]
): TestConfiguraton[] | undefined {
  if (!testConfiguraton || !testConfiguraton?.length) return undefined;
  const convertedTestConfiguration: TestConfiguraton[] = testConfiguraton.map((item) => {
    const testConfig: TestConfiguraton = {
      id: item.customId,
      question: item.question,
      variants: getConvertedVariantsFormValuesToVariants(item.variants as VariantSingleFormValues[])
    };

    return testConfig;
  });

  return convertedTestConfiguration;
}

function getConvertedVariantsFormValuesToVariants(variants: VariantSingleFormValues[]): TestConfiguratonVariant[] {
  const convertedVariants: TestConfiguratonVariant[] = variants.map((item) => {
    const testConfig: TestConfiguratonVariant = {
      id: item.customId,
      answer: item.answer as boolean,
      title: item.title
    };
    return testConfig;
  });

  return convertedVariants;
}
