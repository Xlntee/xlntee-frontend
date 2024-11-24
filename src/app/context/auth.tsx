import { createContext, ReactNode, useMemo, memo } from "react";

import { getUserRole } from "src/app/store/slices/user/selectors";

import { Role } from "src/shared/utils/user-role";

import { useAppSelector } from "../store/store";
import { getIsAuthSelector } from "../store/slices/auth/selectors";

export type AuthContextType = {
  isAuth: boolean;
  userRole: Role | null;
  isStudentRole?: boolean;
  isTeacherRole?: boolean;
};

type AuthContextProps = {
  children?: ReactNode;
};

const initialState: AuthContextType = {
  userRole: null,
  isAuth: false
};

export const AuthContext = createContext<AuthContextType>(initialState);

function AuthProvider({ children }: AuthContextProps): JSX.Element {
  const userRole = useAppSelector(getUserRole);
  const isAuth = useAppSelector(getIsAuthSelector);

  const values = useMemo(() => {
    return {
      isAuth,
      userRole: userRole,
      isStudentRole: userRole === "student",
      isTeacherRole: userRole === "teacher"
    };
  }, [userRole]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

const AuthProviderMemo = memo(AuthProvider);

export { AuthProviderMemo as AuthProvider };
