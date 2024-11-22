import { SortOptionsType } from "src/shared/api/sorting";
import { CourseDurationType } from "../model/courseDuration";
import { LanguageType } from "../model/courseLanguage";
import { DifficultyType } from "../model/difficultyLevels";

export type CoursesQueryParams = { sort: SortOptionsType } & Partial<{
  name: string;
  fromPrice: string;
  toPrice: string;
  level: DifficultyType;
  duration: CourseDurationType;
  language: LanguageType;
  categoryId: number;
  subcategoryId: number;
  topicId: number;
  page: number;
  size: number;
}>;
