import { Lecture } from "./lecture";

export type Lesson = {
  id: string;
  title: string;
  lectures: Lecture[];
  free: boolean;
};
