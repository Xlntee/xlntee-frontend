import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack, Typography, List, ListItem, FormControlLabel, Checkbox, Button, TextField } from "@mui/material";

import { MenuToggler } from "src/features";
import { useAppDispatch } from "src/app/store/store";
import { closeDialogByName, openDialog } from "src/app/store/slices/dialog/slice";

const StudentCourseComplainDialog: FC = () => {
  const { t } = useTranslation("student");
  const dispatch = useAppDispatch();

  const complainList: string[] = t("complain.list", {
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

  function onCloseDialog(): void {
    dispatch(closeDialogByName({ dialogName: "STUDENT_COURSE_COMPLAIN_DIALOG" }));
  }

  function onSubmit(): void {
    console.log("StudentCourseComplainDialog");
    onCloseDialog();
    dispatch(
      openDialog({
        dialogName: "COMPLAIN_INFO_DIALOG",
        dialogSize: "large",
        options: {
          id: "11234"
        }
      })
    );
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <Stack gap="20px">
        <Typography variant="h6" fontWeight={300}>
          {t("complain.title")}*
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
            id="complain-comment"
            aria-label="complain comment"
            type="text"
            placeholder={t("complain.placeholder-comment")}
            fullWidth
          />
          <Typography variant="body2" pl={{ md: "12px" }}>
            *{t("complain.requirements")}
          </Typography>
        </Stack>
        <Stack alignItems="flex-end">
          <Button variant="black-contain" onClick={onSubmit} sx={{ textTransform: "capitalize", minWidth: "120px" }}>
            {t("complain.submit")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StudentCourseComplainDialog;
