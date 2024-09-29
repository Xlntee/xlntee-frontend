import { TestConfiguraton } from "./tests";

export type Lecture = {
  id: string;
  title: string;
  video?: string;
  description?: string;
  files?: string[];
  testConfigurations?: TestConfiguraton[];
};
