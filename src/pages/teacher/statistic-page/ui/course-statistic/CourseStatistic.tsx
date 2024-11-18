import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack } from "@mui/material";

import { CourseCard } from "src/widgets/components";
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
  const { t } = useTranslation("teacher");

  const onDelete = (idCourse: string): void => alert(`course with id: ${idCourse} deleted`);
  const onEdit = (idCourse: string): void => alert(`course with id: ${idCourse} editing`);
  const onRestore = (idCourse: string): void => alert(`course with id: ${idCourse} restored`);

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
          md: "start"
        }}
        flexWrap="wrap"
        flex="1"
      >
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="135" text={t("students")} />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="11" text={t("dashboard.refund")} />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="99" text={t("dashboard.review")} />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="3" text={t("dashboard.complains")} />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="121.1" text={t("dashboard.revenue")} />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="900" text={t("dashboard.refunds-total")} />
        </Box>
        <Box className="course-statistic__grid-item">
          <StatisticInfo value="4.3" text={t("dashboard.rating")} />
        </Box>
      </Stack>
    </Box>
  );
};

export default CourseStatistic;
