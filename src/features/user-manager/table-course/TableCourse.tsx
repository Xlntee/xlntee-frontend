import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { datesFormat } from "src/shared/utils/const";

interface TableCourseProps {
  title?: string;
  items: CourseProps[];
}

export type CourseProps = {
  id: string;
  name: string;
  dateCreation: string;
  status: string;
  courseId: string;
  path: string;
};

const TableCourse: FC<TableCourseProps> = ({ title, items }) => {
  const { t } = useTranslation("user-manager");

  const headCells = [
    t("courses.table.name"),
    t("courses.table.courseId"),
    t("courses.table.dateCreation"),
    t("courses.table.status")
  ];

  return (
    <Box>
      {title && (
        <Typography variant="h6" fontWeight={400} pl="10px">
          {title}
        </Typography>
      )}
      <TableContainer className="table table--courses">
        <Table stickyHeader className="table__inner">
          <TableHead className="table__thead">
            <TableRow>
              {headCells.map((cell, index) => (
                <TableCell key={index} className="table__cell-th">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="table__tbody">
            {items.map((row) => (
              <TableRow key={row.id} className="table__row">
                <TableCell className="table__cell-td truncate-line-1">{row.name}</TableCell>
                <TableCell className="table__cell-td">
                  <Link to={row.path}>{row.courseId}</Link>
                </TableCell>
                <TableCell className="table__cell-td">
                  {dayjs(row.dateCreation).format(datesFormat.secondary)}
                </TableCell>
                <TableCell className="table__cell-td">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCourse;
