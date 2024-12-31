import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack, Typography, List, ListItem, FormControlLabel, Checkbox, Button, TextField } from "@mui/material";

import { MenuToggler } from "src/shared/ui";
import useDialog from "src/shared/hooks/useDialog";

const RefundForm: FC = () => {
  const { t } = useTranslation("student");
  const { onOpenDialog, onCloseDialogByName } = useDialog();

  const complainList = t("refund.list", {
    returnObjects: true
  }) as string[];

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
    onCloseDialogByName("STUDENT_COURSE_REFUND_DIALOG");
  }

  function onSubmit(): void {
    onCloseDialog();
    onOpenDialog({
      dialogName: "REFUND_INFO_DIALOG",
      dialogSize: "large",
      options: {
        id: "1234"
      }
    });
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
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
          <Button variant="dark-contain" onClick={onSubmit} sx={{ textTransform: "capitalize", minWidth: "120px" }}>
            {t("refund.submit")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RefundForm;
