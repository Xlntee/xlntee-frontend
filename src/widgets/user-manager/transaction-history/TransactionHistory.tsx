import { FC } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@mui/material";

import { datesFormat } from "src/shared/utils/const";
import { maskedCardNumber } from "src/shared/utils/methods";

export type CourseProps = {
  id: string;
  date: string;
  amount: string;
  appointment: string;
  cardNumber: string;
  status: string;
};

const TransactionHistory: FC = () => {
  const { t } = useTranslation("user-manager");

  const headCells = [
    t("transactions.table.date"),
    t("transactions.table.amount"),
    t("transactions.table.appointment"),
    t("transactions.table.cardNumber"),
    t("transactions.table.status")
  ];

  const transactionHistory = [
    {
      id: "1",
      date: "2024-08-05T18:45:12.728Z",
      amount: "12.100",
      appointment: "Виведення коштів",
      cardNumber: "1445 1445 1445 1445",
      status: "Виконано"
    },
    {
      id: "2",
      date: "2024-08-05T18:45:12.728Z",
      amount: "12.100",
      appointment: "Надходження",
      cardNumber: "1445 1445 1445 1445",
      status: "Виконано"
    },
    {
      id: "3",
      date: "2024-08-05T18:45:12.728Z",
      amount: "12.100",
      appointment: "Реферальна виплата",
      cardNumber: "5234 3434 9933 1445",
      status: "Виконано"
    }
  ];

  return (
    <Box>
      <Typography variant="h6" fontWeight={400} pl="10px" mb="10px">
        {t("transactions.title")}
      </Typography>
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
            {transactionHistory.map((row) => (
              <TableRow key={row.id} className="table__row">
                <TableCell className="table__cell-td">{dayjs(row.date).format(datesFormat.dateAndTime)}</TableCell>
                <TableCell className="table__cell-td">{row.amount}</TableCell>
                <TableCell className="table__cell-td">{row.appointment}</TableCell>
                <TableCell className="table__cell-td">{maskedCardNumber(row.cardNumber)}</TableCell>
                <TableCell className="table__cell-td">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box textAlign="center">
        <Button variant="black-text" sx={{ fontWeight: 300 }}>
          {t("showMore")}
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
