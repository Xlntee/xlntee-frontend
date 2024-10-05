import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface TableComplainProps {
  title?: string;
  items: ComplainProps[];
}

export type ComplainProps = {
  id: string;
  reason: string;
  description: string;
  number: string;
  path?: string;
};

const TableComplain: FC<TableComplainProps> = ({ title, items }) => {
  const { t } = useTranslation("user-manager");

  const headCells = [t("complain.table.number"), t("complain.table.reason"), t("complain.table.description")];

  return (
    <Box>
      {title && (
        <Typography variant="h6" fontWeight={400} pl="10px">
          {title}
        </Typography>
      )}
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
            {items.map((row) => (
              <TableRow key={row.id} className="table__row">
                <TableCell className="table__cell-td">
                  {row.path ? <Link to={row.path}>{row.number}</Link> : row.number}
                </TableCell>
                <TableCell className="table__cell-td">{row.reason}</TableCell>
                <TableCell className="table__cell-td">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComplain;
