import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface TableAboutCourseProps {
  price: string;
  sales: string;
  income: string;
  complains: string;
  refund: string;
  rating: string;
}

const TableAboutCourse: FC<TableAboutCourseProps> = ({ price, sales, income, complains, refund, rating }) => {
  const { t } = useTranslation("user-manager");

  const headCells = [
    t("about-course.table.price"),
    t("about-course.table.sales"),
    t("about-course.table.income"),
    t("about-course.table.complains"),
    t("about-course.table.refund"),
    t("about-course.table.rating")
  ];

  return (
    <TableContainer className="table">
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
          <TableRow className="table__row">
            <TableCell className="table__cell-td">{price}</TableCell>
            <TableCell className="table__cell-td">{sales}</TableCell>
            <TableCell className="table__cell-td">{income}</TableCell>
            <TableCell className="table__cell-td">{complains}</TableCell>
            <TableCell className="table__cell-td">{refund}</TableCell>
            <TableCell className="table__cell-td">{rating}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableAboutCourse;
