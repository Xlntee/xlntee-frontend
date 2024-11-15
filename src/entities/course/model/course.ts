import { LanguageType } from "./courseLanguage";
import { CourseStatusType } from "./courseStatus";
import { DifficultyType } from "./difficultyLevels";
import { Lecture } from "./lecture";
import { PriceLevelType } from "./priceLevel";

export type GeneralSetting = {
  title: string;
  subTitle: string;
  generateCertificate: boolean;
  categoryId: number;
  subCategoryId: number;
  topicId: number;
  level: DifficultyType;
  language: LanguageType;
  tags?: string[];
};

export type LandingSettings = {
  description: string;
  promoVideo: string;
  promoImage: string;
  aboutInfos?: string[];
  requiredKnowledge?: string[];
};

export type CourseSettings = {
  title: string[];
  lectures?: Lecture[];
};

export type PriceSettings = {
  freeCourse: boolean;
  lectures: PriceLevelType;
};

export type CourseDetails = {
  generalSetting: GeneralSetting;
  landingSetting: LandingSettings;
  courseSetting: CourseSettings;
  priceSetting: PriceSettings;
};

export type Course = CourseDetails & {
  id: string;
};

export type CourseSummary = {
  id: string;
  name: string;
  courseRating: number;
  price: number;
  level: DifficultyType;
  discount: number;
  photoId: string;
  publishedDate: Date;
  courseStatus: CourseStatusType;
};
