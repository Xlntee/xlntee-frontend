import { Language } from "./courseLanguage";
import { CourseStatus } from "./courseStatus";
import { Difficulty } from "./difficultyLevels";
import { Lecture } from "./lecture";
import { PriceType } from "./priceType";

export type GeneralSettings = {
  title: string;
  subTitle: string;
  generateCertificate: boolean;
  categoryId: number;
  subCategoryId: number;
  topicId: number;
  level: Difficulty;
  language: Language;
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
  lectures: PriceType;
};

export type CourseDetails = {
  generalSettings: GeneralSettings;
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
  level: Difficulty;
  discount: number;
  photoId: string;
  publishedDate: Date;
  courseStatus: CourseStatus;
};
