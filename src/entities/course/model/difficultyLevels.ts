export const Difficulty = {
  easy: "EASY",
  middle: "MIDDLE",
  expert: "EXPERT",
  all: "ALL"
} as const;

type DifficultyKeyType = keyof typeof Difficulty;

export type DifficultyType = (typeof Difficulty)[DifficultyKeyType];
