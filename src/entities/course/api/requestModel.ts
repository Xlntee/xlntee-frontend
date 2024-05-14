import { SortOptions } from "src/shared/api/sorting";
import { CourseDuration } from "../model/courseDuration";
import { Language } from "../model/courseLanguage";
import { Difficulty } from "../model/difficultyLevels";

export type CoursesQueryParams = { sort: SortOptions } & Partial<{
  name: string;
  fromPrice: string;
  toPrice: string;
  level: Difficulty;
  duration: CourseDuration;
  language: Language;
  categoryId: number;
  subcategoryId: number;
  topicId: number;
  page: number;
  size: number;
}>;
