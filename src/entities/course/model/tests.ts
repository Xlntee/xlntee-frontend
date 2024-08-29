export type TestConfiguratonVariant = {
  id: string;
  title: string;
  answer: boolean;
};

export type TestConfiguraton = {
  id: string;
  question: string;
  variants?: TestConfiguratonVariant[];
};
