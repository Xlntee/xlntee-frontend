import { FC } from "react";
import cn from "classnames";

import { Dialog } from "@mui/material";

import { useAppSelector } from "src/app/store/store";
import {
  getAllDialogsSelector,
  getDialogSizeSelector,
  getIsDialogOpenedSelector
} from "src/app/store/slices/dialog/selectors";

import { SuspenseWrapper } from "src/shared/utils/suspense-wrapper";

import useDialog from "src/hooks/useDialog";
import dialogs from "../index";

import "./RootDialog.scss";

const RootDialog: FC = () => {
  const { closeDialogs } = useDialog();

  const visibleDialog = useAppSelector(getIsDialogOpenedSelector);
  const sizeDialog = useAppSelector(getDialogSizeSelector);
  const dialogsSelector = useAppSelector(getAllDialogsSelector);

  const dialogClassnames = cn("dialog-modal", {
    "dialog-modal--large": sizeDialog === "large",
    "dialog-modal--extra-large": sizeDialog === "extra-large",
    "dialog-modal--fullscreen": sizeDialog === "fullscreen"
  });

  const getDialogComponent = dialogsSelector.map((item) => {
    return {
      component: dialogs[item.dialogName as keyof typeof dialogs]
    };
  });

  return (
    <Dialog open={visibleDialog} className={dialogClassnames} onClose={closeDialogs}>
      {getDialogComponent.map((dialog, index) => {
        const Component = dialog.component;

        return (
          <SuspenseWrapper key={index}>
            <Component />
          </SuspenseWrapper>
        );
      })}
    </Dialog>
  );
};

export default RootDialog;
