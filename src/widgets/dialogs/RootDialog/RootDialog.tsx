import { FC } from "react";

import { Dialog } from "@mui/material";

import { useAppDispatch, useAppSelector } from "src/app/store/store";
import { getAllDialogsSelector, getIsDialogOpenedSelector } from "src/app/store/slices/dialog/selectors";
import { SuspenseWrapper } from "src/shared/utils/suspense-wrapper";
import { closeLatestDialog } from "src/app/store/slices/dialog/slice";

import dialogs from "../index";

import "./RootDialog.scss";

const RootDialog: FC = () => {
  const dispatch = useAppDispatch();

  const visibleDialog = useAppSelector(getIsDialogOpenedSelector);
  const dialogsSelector = useAppSelector(getAllDialogsSelector);

  const getDialogComponent = dialogsSelector.map((item) => {
    return {
      component: dialogs[item.dialogName as keyof typeof dialogs]
    };
  });

  function closeDialog(): void {
    dispatch(closeLatestDialog());
  }

  return (
    <Dialog open={visibleDialog} onClose={closeDialog}>
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
