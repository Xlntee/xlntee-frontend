import { FC } from "react";

import { Progress } from "src/features";

const CourseProgress: FC = () => {
  const value = 60;

  return <Progress value={value} showValue={true} />;
};

export default CourseProgress;
