import { FC, ReactNode } from "react";

import { RootDrawer } from "src/widgets/drawers/root-drawer";
import { RootDialog } from "src/widgets/dialogs/root-dialog";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <RootDialog />
      <RootDrawer />
    </>
  );
};

export default RootLayout;
