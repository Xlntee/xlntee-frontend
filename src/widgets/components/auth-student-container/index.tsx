import { FC } from "react";

import { useAuth } from "src/shared/hooks/useAuth";

type AuthStudentContainerProps = {
  children?: React.ReactNode;
};

const AuthStudentContainer: FC<AuthStudentContainerProps> = ({ children }) => {
  const { userRole } = useAuth();

  if (userRole !== "student") {
    return null;
  }

  return <>{children}</>;
};

export default AuthStudentContainer;
