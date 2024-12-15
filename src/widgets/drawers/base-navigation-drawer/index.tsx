import { FC } from "react";

import useDrawer from "src/shared/hooks/useDrawer";
import useHeaderNavigation from "src/shared/hooks/useHeaderNavigation";

import NavigationDrawer from "../navigation-drawer";

const HeaderProfile: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();
  const { navigationList } = useHeaderNavigation();
  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

  return <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer} />;
};

export default HeaderProfile;
