export const Language = {
  ukrainian: "UKRAINIAN",
  english: "ENGLISH"
} as const;

type LanguageKeyType = keyof typeof Language;

export type LanguageType = (typeof Language)[LanguageKeyType];
