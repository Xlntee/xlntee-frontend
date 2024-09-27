import { FC } from "react";

import { Box, Stack } from "@mui/material";

import CourseCard from "src/widgets/course-card/CourseCard";
import { StatisticInfo } from "src/features";

import "./CourseStatistic.scss";

interface CourseStatisticProps {
  id: string;
  title: string;
  status: string;
  updateTime: string;
  image: string;
}

const CourseStatistic: FC<CourseStatisticProps> = ({ id, title, status, updateTime, image }) => {
  const onDelete = (id: string) => alert(`course with id: ${id} deleted`);
  const onEdit = (id: string) => alert(`course with id: ${id} editing`);
  const onRestore = (id: string) => alert(`course with id: ${id} restored`);

  return (
    <Box className="course-statistic">
      <CourseCard
        title={title}
        status={status}
        updateTime={updateTime}
        imageSrc={image}
        onDelete={() => onDelete(id)}
        onEdit={() => onEdit(id)}
        onRestore={() => onRestore(id)}
        className="course-statistic__card"
      />
      <Stack
        gap={{ xs: "8px", md: "10px", lg: "20px" }}
        direction={{ xs: "row" }}
        justifyContent={{
          xs: "space-between",
          md: "start",
        }}
        flexWrap="wrap"
        flex="1"
      >
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="135" text="Student / period" />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="11" text="Refund / period" />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="99" text="Review / period" />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="3" text="Complains" />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="121.1" text="Revenue / period" />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="900" text="Refunds total / period" />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="4.3" text="Rating" />
        </Box>
      </Stack>
    </Box>
  );
};

export default CourseStatistic;
