import { TestConfiguraton, TestConfiguratonVariant } from "src/entities/course/model";
import { Lesson } from "src/entities/course/model/lesson";
import { MakeKeyRequired } from "src/shared/types";

export type AddLecturePayload = {
  lessonId: string;
  lectureId: string;
};

export type DeleteLecturePayload = {
  lessonId: string;
  lectureId: string;
};

export type AddFilePayload = {
  lessonId: string;
  lectureId: string;
  type: "file" | "video";
  files: string | string[];
};

export type DeleteFilePayload = {
  lessonId: string;
  lectureId: string;
  type: "file" | "video";
  id?: string;
};

export type UpdateLectureDescriptionPayload = {
  lessonId: string;
  lectureId: string;
  descriptionValue: string;
};

export type AddAnswerPayload = {
  lessonId: string;
  lectureId: string;
  questionId: string;
  answerInitialData: TestConfiguratonVariant;
};

export type DeleteAnswerPayload = {
  lessonId: string;
  lectureId: string;
  questionId: string;
  answerId: string;
};

export type AddQuestionPayload = {
  lessonId: string;
  lectureId: string;
  quizInitialData: MakeKeyRequired<TestConfiguraton, "variants">;
};

export type DeleteQuestionPayload = {
  lessonId: string;
  lectureId: string;
  questionId: string;
};

export type AddQuizPayload = {
  lessonId: string;
  lectureId: string;
  quizInitialData: MakeKeyRequired<TestConfiguraton, "variants">;
};

export type UpdateLessonPayload = {
  lessonId: string;
  payload: Lesson;
};
