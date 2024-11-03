import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack, Typography, List, ListItem, FormControlLabel, Checkbox, Button, TextField } from "@mui/material";

import { InfoCourseComplain } from "../info-course-complain";

const RefundForm: FC = () => {
  const { t } = useTranslation("student");
  const [successForm, setSuccessForm] = useState<boolean>(false);

  const complainList: string[] = t("refund.list", {
    returnObjects: true
  });

  const checkList = [
    {
      name: "1",
      value: complainList[0]
    },
    {
      name: "2",
      value: complainList[1]
    },
    {
      name: "3",
      value: complainList[2]
    },
    {
      name: "4",
      value: complainList[3]
    },
    {
      name: "5",
      value: complainList[4]
    },
    {
      name: "6",
      value: complainList[5]
    }
  ];

  function onSubmit(): void {
    setSuccessForm(true);
  }

  return (
    <Box>
      {!successForm ? (
        <Stack gap="20px">
          <Typography variant="h6" fontWeight={300}>
            {t("refund.title")}*
          </Typography>
          <List className="complain-list">
            {checkList.map(({ name, value }) => (
              <ListItem key={name} className="complain-list__item">
                <FormControlLabel
                  control={<Checkbox />}
                  className="complain-list__form-label"
                  label={<Typography variant="body2">{value}</Typography>}
                />
              </ListItem>
            ))}
          </List>
          <Stack gap="10px">
            <TextField
              id="refund-comment"
              aria-label="refund comment"
              type="text"
              placeholder={t("refund.placeholder-comment")}
              fullWidth
            />
            <Typography variant="body2" pl={{ md: "12px" }}>
              *{t("refund.requirements")}
            </Typography>
          </Stack>
          <Stack alignItems="flex-end">
            <Button variant="black-contain" onClick={onSubmit} sx={{ textTransform: "capitalize", minWidth: "120px" }}>
              {t("refund.submit")}
            </Button>
          </Stack>
        </Stack>
      ) : (
        <InfoCourseComplain
          image="/assets/refund.png"
          imageDescription={t("refund.imageDescription")}
          message={t("refund.message", {
            code: "R021039"
          })}
        />
      )}
    </Box>
  );
};

export default RefundForm;
