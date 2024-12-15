import { FC, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Tooltip, Stack, Button, Menu } from "@mui/material";

import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import useDialog from "src/shared/hooks/useDialog";

import "./CourseComplain.scss";

const Dialogs = {
  complain: "complain",
  refund: "refund"
} as const;

type DialogType = typeof Dialogs;

const CourseRate: FC = () => {
  const { t } = useTranslation("common");

  const { onOpenDialog } = useDialog();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenu(): void {
    setAnchorEl(null);
  }

  function onHandleClickModal(type: keyof DialogType): void {
    switch (type) {
      case Dialogs.complain: {
        onOpenDialog({
          dialogName: "STUDENT_COURSE_COMPLAIN_DIALOG",
          dialogSize: "large"
        });
        break;
      }
      case Dialogs.refund: {
        onOpenDialog({
          dialogName: "STUDENT_COURSE_REFUND_DIALOG",
          dialogSize: "large"
        });
        break;
      }
    }
  }

  return (
    <Box className="course-complain">
      <Tooltip title={undefined} className="account-menu-tool">
        <Button
          aria-haspopup="true"
          aria-controls="account-menu"
          aria-expanded={open ? "true" : undefined}
          endIcon={<ArrowDropDownIcon />}
          variant="black-text"
          className="course-complain__toggler"
          onClick={handleClick}
        >
          <NewReleasesOutlinedIcon />
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="course-complain-menu"
        open={open}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className="course-complain-menu"
      >
        <Stack position="relative" direction="column" gap="10px" padding="14px">
          <Button
            variant="black-text"
            startIcon={<NewReleasesOutlinedIcon />}
            className="course-complain-menu__button"
            onClick={() => onHandleClickModal(Dialogs.complain)}
          >
            {t("complain")}
          </Button>
          <Button
            variant="black-text"
            startIcon={<CreditCardIcon />}
            className="course-complain-menu__button"
            onClick={() => onHandleClickModal(Dialogs.refund)}
          >
            {t("refund")}
          </Button>
        </Stack>
      </Menu>
    </Box>
  );
};

export default CourseRate;
