import { FC } from "react";

import { useAuth } from "src/shared/hooks/useAuth";

type AuthTeacherContainerProps = {
  children?: React.ReactNode;
};

const AuthTeacherContainer: FC<AuthTeacherContainerProps> = ({ children }) => {
  const { userRole } = useAuth();

  if (userRole !== "teacher") {
    return null;
  }

  return <>{children}</>;
};

export default AuthTeacherContainer;
