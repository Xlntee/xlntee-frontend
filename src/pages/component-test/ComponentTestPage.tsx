import "./ComponentTestPage.scss";
import { FC, PropsWithChildren } from "react";

const ComponentTestPage: FC<PropsWithChildren> = ({ children }) => {
  return <div className="component-test-page">{children}</div>;
};

export default ComponentTestPage;
