export enum TestConfigurationType {
  CHECK_BOX = "CHECK_BOX",
  RADIO_BTN = "RADIO_BTN",
}

type TestConfiguratonVariant = {
  id: string;
  title: string;
  answer: boolean;
};

export type TestConfiguraton = {
  id: string;
  question: string;
  type: TestConfigurationType;
  variants?: TestConfiguratonVariant[];
};
