import { getDrawerNameSelector, isDrawerOpenedSelector, getDrawerProps } from "src/app/store/slices/drawer/selectors";
import { closeDrawer, openDrawer } from "src/app/store/slices/drawer/slice";
import { DrawerNames, DrawerProps } from "src/app/store/slices/drawer/type";
import { useAppDispatch, useAppSelector } from "src/app/store/store";

interface UseDrawer {
  activeDrawerName: DrawerNames | null;
  isDrawerOpened: boolean;
  drawerProps: DrawerProps;
  isOpenDrawer: (name: DrawerNames) => boolean;
  onOpenDrawer: (name: DrawerNames, props?: DrawerProps) => void;
  onCloseDrawer: () => void;
}

export default function useDrawer(): UseDrawer {
  const drawerName = useAppSelector(getDrawerNameSelector);
  const isDrawerOpened = useAppSelector(isDrawerOpenedSelector);
  const drawerProps = useAppSelector(getDrawerProps);

  const dispatch = useAppDispatch();

  function isOpenDrawer(name: DrawerNames): boolean {
    return isDrawerOpened && drawerName === name;
  }

  function onOpenDrawer(name: DrawerNames, props?: DrawerProps): void {
    dispatch(openDrawer({ dialogName: name, props }));
  }

  function onCloseDrawer(): void {
    if (drawerName) {
      dispatch(closeDrawer());
    }
  }

  return {
    isDrawerOpened,
    activeDrawerName: drawerName,
    drawerProps,
    onOpenDrawer,
    isOpenDrawer,
    onCloseDrawer
  };
}
