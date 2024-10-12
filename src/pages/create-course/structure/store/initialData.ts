import { Lecture, TestConfiguraton, TestConfiguratonVariant } from "src/entities/course/model";
import { ILessonsState } from "./lessonsSlice";
import { v4 as uuidv4 } from "uuid";
import { MakeKeyRequired } from "src/shared/types";

export const getInitalAnswerVariant = (): TestConfiguratonVariant => {
  return {
    id: uuidv4(),
    title: "",
    answer: false
  };
};

export const getInitialTestConfiguration = (): MakeKeyRequired<TestConfiguraton, "variants"> => {
  return {
    id: uuidv4(),
    question: "",
    variants: [getInitalAnswerVariant(), getInitalAnswerVariant()]
  };
};

export const getInitialLecture = (id?: string): Lecture => {
  return {
    id: id || uuidv4(),
    title: ""
  };
};

export const initialState: ILessonsState = {
  lessons: [
    {
      id: uuidv4(),
      title: "",
      free: false,
      lectures: [
        {
          id: uuidv4(),
          title: ""
        }
      ]
    }
  ]
};
