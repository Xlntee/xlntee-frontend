import { createContext, ReactNode, useMemo, memo } from "react";

import { getUserRole } from "src/app/store/slices/user/selectors";

import { Role } from "src/shared/utils/user-role";
import { useAppSelector } from "../store/store";

export type AuthContextType = {
  userRole: Role | null;
  isStudentRole?: boolean;
  isTeacherRole?: boolean;
};

interface AuthContextProps {
  children?: ReactNode;
}

const initialState: AuthContextType = {
  userRole: null
};

export const AuthContext = createContext<AuthContextType>(initialState);

function AuthProvider({ children }: AuthContextProps): JSX.Element {
  const userRole = useAppSelector(getUserRole);

  const values = useMemo(() => {
    return {
      userRole: userRole,
      isStudentRole: userRole === "student",
      isTeacherRole: userRole === "teacher"
    };
  }, [userRole]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

const AuthProviderMemo = memo(AuthProvider);

export { AuthProviderMemo as AuthProvider };
