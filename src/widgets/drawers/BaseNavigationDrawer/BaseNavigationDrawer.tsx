import { FC } from "react";

import { NavigationDrawer } from "../NavigationDrawer";
import useDrawer from "src/hooks/useDrawer";
import useHeaderNavigation from "src/hooks/useHeaderNavigation";

const HeaderProfile: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();
  const { navigationList } = useHeaderNavigation();
  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

  return <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer} />;
};

export default HeaderProfile;
