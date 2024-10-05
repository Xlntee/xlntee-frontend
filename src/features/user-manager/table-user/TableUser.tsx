import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import { datesFormat } from "src/shared/utils/const";

interface TableUserProps {
  items: UserProps[];
  linked?: boolean;
}

export interface UserProps {
  id: string;
  fullname: string;
  email: string;
  dateRegistration: string;
  latestActivity: string;
  path?: string;
}

const TableUser: FC<TableUserProps> = ({ items }) => {
  const { t } = useTranslation("user-manager");
  const navigate = useNavigate();

  const headCells = [
    t("users.table-users.fullname"),
    t("users.table-users.email"),
    t("users.table-users.dateRegistration"),
    t("users.table-users.latestActivity")
  ];

  return (
    <TableContainer className="table table--users">
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
            <TableRow
              key={row.id}
              className="table__row"
              sx={{ cursor: row.path ? "pointer" : "default" }}
              onClick={() => {
                row.path && navigate(row.path);
              }}
            >
              <TableCell className="table__cell-td">{row.fullname}</TableCell>
              <TableCell className="table__cell-td">{row.email}</TableCell>
              <TableCell className="table__cell-td">
                {dayjs(row.dateRegistration).format(datesFormat.secondary)}
              </TableCell>
              <TableCell className="table__cell-td">
                {dayjs(row.latestActivity).format(datesFormat.secondary)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUser;
