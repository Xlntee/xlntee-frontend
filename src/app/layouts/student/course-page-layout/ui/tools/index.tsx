import { FC } from "react";

import { Stack } from "@mui/material";

import { CourseComplain, CourseRate, CourseShare } from "src/widgets/components";

const Tools: FC = () => {
  return (
    <Stack direction="row" gap={{ xs: "8px", md: "14px" }} alignItems="center">
      <CourseRate />
      <CourseShare />
      <CourseComplain />
    </Stack>
  );
};

export default Tools;
