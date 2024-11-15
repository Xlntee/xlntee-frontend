export const PriceLevel = {
  PRICE_LEVEL_1: "PRICE_LEVEL_1",
  PRICE_LEVEL_2: "PRICE_LEVEL_2",
  PRICE_LEVEL_3: "PRICE_LEVEL_3",
  PRICE_LEVEL_4: "PRICE_LEVEL_4",
  PRICE_LEVEL_5: "PRICE_LEVEL_5",
  PRICE_LEVEL_6: "PRICE_LEVEL_6"
};

type PriceLevelKeyType = keyof typeof PriceLevel;

export type PriceLevelType = (typeof PriceLevel)[PriceLevelKeyType];
