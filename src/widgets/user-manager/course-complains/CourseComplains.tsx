import { FC } from "react";
import dayjs from "dayjs";

import { Box, Typography, Stack } from "@mui/material";

import { TableComplain } from "src/features/user-manager";
import { datesFormat } from "src/shared/utils/const";

interface CourseComplainsProps {
  title: string;
}

const CourseComplains: FC<CourseComplainsProps> = ({ title }) => {
  const complains = ["2024-08-05T18:45:12.728Z", "2024-08-05T18:45:12.728Z"];

  const complainTables = [
    {
      id: "1",
      number: "RID2342341",
      reason: "Курс не відповідає рівню зазначеному у описі курсу",
      description: "Опис скарги буде  Опис скарги буде тут"
    },
    {
      id: "2",
      number: "RID2342342",
      reason: "Курс не відповідає рівню зазначеному у описі курсу",
      description: "Опис скарги буде  Опис скарги буде тут"
    }
  ];

  return (
    <Box>
      <Typography variant="h6" fontWeight={400} pl="10px" mb="20px">
        {title}
      </Typography>
      {complains.length ? (
        <Stack gap="10px">
          {complains.map((item) => (
            <Box key={item}>
              <Typography variant="h6" fontWeight={400} pl="10px" mb="10px">
                {dayjs(item).format(datesFormat.secondary)}
              </Typography>
              {complainTables.length ? (
                <>
                  {complainTables.map((table) => (
                    <TableComplain key={table.id} items={[table]} />
                  ))}
                </>
              ) : null}
            </Box>
          ))}
        </Stack>
      ) : null}
    </Box>
  );
};

export default CourseComplains;
