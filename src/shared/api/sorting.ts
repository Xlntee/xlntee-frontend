export const SortOptions = {
  asc: "ASC",
  desc: "DESC"
} as const;

type SortOptionsKeyType = keyof typeof SortOptions;

export type SortOptionsType = (typeof SortOptions)[SortOptionsKeyType];
