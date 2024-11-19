import { getAllDialogsSelector, getDialogByName } from "src/app/store/slices/dialog/selectors";
import { closeDialogByName, openDialog, closeAllDialogs } from "src/app/store/slices/dialog/slice";
import { DialogItem, DialogNames, PayloadDialogProps } from "src/app/store/slices/dialog/type";
import { useAppDispatch, useAppSelector } from "src/app/store/store";

interface UseDialog {
  allDialogs: DialogItem[];
  onOpenDialog: (props: PayloadDialogProps) => void;
  onCloseDialogByName: (name: DialogNames) => void;
  getOptionsFromDialog: (name: DialogNames) => any;
  closeDialogs: () => any;
}

export default function useDialog(): UseDialog {
  const dispatch = useAppDispatch();

  const allDialogs = useAppSelector(getAllDialogsSelector);

  function onOpenDialog(props: PayloadDialogProps): void {
    dispatch(openDialog(props));
  }

  function onCloseDialogByName(name: DialogNames): void {
    dispatch(closeDialogByName({ dialogName: name }));
  }

  function getOptionsFromDialog(name: DialogNames): any {
    return getDialogByName(allDialogs, name).options;
  }

  function closeDialogs(): void {
    if (allDialogs.length) {
      dispatch(closeAllDialogs());
    }
  }

  return {
    allDialogs,
    onOpenDialog,
    onCloseDialogByName,
    getOptionsFromDialog,
    closeDialogs
  };
}
