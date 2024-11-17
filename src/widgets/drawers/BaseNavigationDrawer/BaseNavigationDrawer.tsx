import { FC } from "react";

import { NavigationDrawer } from "../NavigationDrawer";
import useDrawer from "src/hooks/useDrawer";
import useHeaderNavigation from "src/hooks/useHeaderNavigation";

import { HeaderTools } from "src/widgets/components/header-tools";

const HeaderProfile: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();
  const { navigationList } = useHeaderNavigation();
  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

  return (
    <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer}>
      <HeaderTools />
    </NavigationDrawer>
  );
};

export default HeaderProfile;
