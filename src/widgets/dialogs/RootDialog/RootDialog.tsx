import { FC, useEffect, useRef } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";

import { Dialog } from "@mui/material";

import { useAppDispatch, useAppSelector } from "src/app/store/store";
import {
  getAllDialogsSelector,
  getDialogSizeSelector,
  getIsDialogOpenedSelector
} from "src/app/store/slices/dialog/selectors";
import { closeAllDialogs } from "src/app/store/slices/dialog/slice";

import { SuspenseWrapper } from "src/shared/utils/suspense-wrapper";

import useDialog from "src/hooks/useDialog";
import dialogs from "../index";

import "./RootDialog.scss";

const RootDialog: FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const pathRef = useRef<string>("");
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

  useEffect(() => {
    pathRef.current = pathname;
  }, []);

  useEffect(() => {
    if (pathRef.current !== pathname) {
      closeDialogs();
    }
  }, [pathname]);

  return (
    <Dialog open={visibleDialog} className={dialogClassnames} onClose={() => dispatch(closeAllDialogs())}>
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
