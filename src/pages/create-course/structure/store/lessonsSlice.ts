import { createSelector, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "src/app/store/store";
import { Lesson } from "src/entities/course/model/lesson";

import { getLectureIndexes, getLessonIndex, getQuestionIndex } from "./utils";

import {
  AddLecturePayload,
  DeleteFilePayload,
  AddAnswerPayload,
  DeleteAnswerPayload,
  AddQuestionPayload,
  DeleteQuestionPayload,
  DeleteLecturePayload,
  AddQuizPayload,
  AddFilePayload,
  UpdateLectureDescriptionPayload,
  UpdateLessonPayload,
} from "./types";

import { getInitialLecture, initialState } from "./initialData";
import { TestConfiguratonVariant } from "src/entities/course/model";

export interface ILessonsState {
  lessons: Lesson[];
}

export const selectLessons = (state: RootState) => state.lessons.lessons;

export const selectLectureByLesson = (lessonId: string, lectureId: string) =>
  createSelector([selectLessons], (lessons) => {
    const { lessonIndex, lectureIndex } = getLectureIndexes(lessons, lessonId, lectureId);
    return lessons[lessonIndex].lectures?.[lectureIndex];
  });

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    toggleFreeLesson: (state: ILessonsState, action: PayloadAction<{ lessonId: string; free: boolean }>) => {
      const { lessonId, free } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const lessonIndex = getLessonIndex(copyLessons, lessonId);
      copyLessons[lessonIndex].free = free;
      state.lessons = copyLessons;
    },
    addLesson: (state: ILessonsState) => {
      state.lessons.push({
        id: uuidv4().toString(),
        title: "",
        free: false,
        lectures: [getInitialLecture()],
      });
    },
    deleteLesson: (state: ILessonsState, action: PayloadAction<{ lessonId: string }>) => {
      state.lessons = state.lessons.filter((lesson) => lesson.id !== action.payload.lessonId);
    },
    addLecture: (state: ILessonsState, action: PayloadAction<AddLecturePayload>) => {
      const { lessonId, lectureId } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const lessonIndex = getLessonIndex(copyLessons, lessonId);
      copyLessons[lessonIndex].lectures.push(getInitialLecture(lectureId));
      state.lessons = copyLessons;
    },
    deleteLecture: (state: ILessonsState, action: PayloadAction<DeleteLecturePayload>) => {
      const { lessonId, lectureId } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);
      copyLessons[lessonIndex].lectures.splice(lectureIndex, 1);
      state.lessons = copyLessons;
    },
    addFile: (state: ILessonsState, action: PayloadAction<AddFilePayload>) => {
      const { lessonId, lectureId, type, files } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);

      if (type === "file") {
        copyLessons[lessonIndex].lectures[lectureIndex].files = files as string[];
      }
      if (type === "video") {
        copyLessons[lessonIndex].lectures[lectureIndex].video = files as string;
      }

      state.lessons = copyLessons;
    },
    deleteFile: (state: ILessonsState, action: PayloadAction<DeleteFilePayload>) => {
      const { lessonId, lectureId, type } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);

      if (type === "file") {
        const files = copyLessons[lessonIndex].lectures[lectureIndex].files;
        if (!files?.length) {
          delete copyLessons[lessonIndex].lectures[lectureIndex].files;
        } else if (copyLessons[lessonIndex].lectures[lectureIndex].files && action.payload.id) {
          const fileIdx = files.findIndex((file) => file === action.payload.id);
          copyLessons[lessonIndex].lectures[lectureIndex].files?.splice(fileIdx, 1);
        }
      }
      if (type === "video") {
        copyLessons[lessonIndex].lectures[lectureIndex].video;
      }

      state.lessons = copyLessons;
    },
    updateLectureDescription: (state: ILessonsState, action: PayloadAction<UpdateLectureDescriptionPayload>) => {
      const { lessonId, lectureId, descriptionValue } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);

      copyLessons[lessonIndex].lectures[lectureIndex].description = descriptionValue;

      state.lessons = copyLessons;
    },
    addQuestion: (state: ILessonsState, action: PayloadAction<AddQuestionPayload>) => {
      const { lessonId, lectureId, quizInitialData } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));

      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);

      const currentLectures = copyLessons[lessonIndex].lectures;
      const currentTestConfiguration = currentLectures[lectureIndex].testConfigurations;

      if (!currentTestConfiguration) return;
      currentTestConfiguration.push(quizInitialData);

      state.lessons = copyLessons;
    },
    deleteQuestion: (state: ILessonsState, action: PayloadAction<DeleteQuestionPayload>) => {
      const { lessonId, lectureId, questionId } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));

      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);

      const currentLectures = copyLessons[lessonIndex].lectures;

      const currentTestConfigurations = currentLectures[lectureIndex].testConfigurations;
      if (!currentTestConfigurations) return;

      const questionIdx = getQuestionIndex(currentTestConfigurations, questionId);
      const currentTestConfiguration = currentLectures[lectureIndex].testConfigurations;

      if (!currentTestConfiguration) return;

      currentTestConfiguration.splice(questionIdx, 1);

      state.lessons = copyLessons;
    },
    addAnswer: (state: ILessonsState, action: PayloadAction<AddAnswerPayload>) => {
      const { lessonId, lectureId, questionId, answerInitialData } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);

      const currentLectures = copyLessons[lessonIndex].lectures;

      const currentTestConfigurations = currentLectures[lectureIndex].testConfigurations;
      if (!currentTestConfigurations) return;

      const questionIdx = getQuestionIndex(currentTestConfigurations, questionId);

      const currentVariants = currentTestConfigurations[questionIdx].variants;
      if (!currentVariants) return;

      currentVariants.push(answerInitialData);

      state.lessons = copyLessons;
    },
    deleteAnswer: (state: ILessonsState, action: PayloadAction<DeleteAnswerPayload>) => {
      const { lessonId, lectureId, questionId, answerId } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));

      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);

      const currentLectures = copyLessons[lessonIndex].lectures;
      const currentTestConfigurations = currentLectures[lectureIndex].testConfigurations;
      if (!currentTestConfigurations) return;

      const questionIdx = getQuestionIndex(currentTestConfigurations, questionId);
      const currentTestConfiguration = currentLectures[lectureIndex].testConfigurations;

      if (!currentTestConfiguration) return;
      if (!currentTestConfiguration[questionIdx].variants) return;

      const currentVariants = currentTestConfiguration[questionIdx].variants as TestConfiguratonVariant[];
      const answerIdx = currentVariants.findIndex((variant: TestConfiguratonVariant) => variant.id === answerId);
      currentVariants.splice(answerIdx, 1);

      state.lessons = copyLessons;
    },
    addQuiz: (state: ILessonsState, action: PayloadAction<AddQuizPayload>) => {
      const { lessonId, lectureId, quizInitialData } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const { lessonIndex, lectureIndex } = getLectureIndexes(copyLessons, lessonId, lectureId);
      copyLessons[lessonIndex].lectures[lectureIndex] = {
        ...copyLessons[lessonIndex].lectures[lectureIndex],
        testConfigurations: [quizInitialData],
      };
      state.lessons = copyLessons;
    },
    updateLesson: (state: ILessonsState, action: PayloadAction<UpdateLessonPayload>) => {
      const { lessonId, payload } = action.payload;
      const copyLessons = structuredClone(current(state.lessons));
      const lessonIndex = getLessonIndex(copyLessons, lessonId);

      copyLessons[lessonIndex] = payload;

      state.lessons = copyLessons;
    },
  },
});

export const {
  toggleFreeLesson,
  addLesson,
  deleteLesson,
  addLecture,
  deleteLecture,
  addFile,
  deleteFile,
  updateLectureDescription,
  deleteAnswer,
  addAnswer,
  addQuestion,
  deleteQuestion,
  addQuiz,
  updateLesson,
} = lessonSlice.actions;

export default lessonSlice.reducer;
