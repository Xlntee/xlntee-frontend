import { createContext, ReactNode, useMemo, memo, useEffect } from "react";

import { getUserRole } from "src/app/store/slices/user/selectors";

import { Role } from "src/shared/config/user-role";
import { AppLoader } from "src/features";
// useAppDispatch
import { useAppSelector } from "../store/store";
import { getIsAuthSelector } from "../store/slices/auth/selectors";
// import { initializeApp } from "../api/initializeApp";
import { getIsAppLoadingSelector } from "../store/slices/appInitialization/selectors";

export type AuthContextType = {
  isAuth: boolean;
  userRole: Role | null;
  isAppLoading: boolean;
  isStudentRole?: boolean;
  isTeacherRole?: boolean;
};

type AuthContextProps = {
  children?: ReactNode;
};

const initialState: AuthContextType = {
  userRole: null,
  isAuth: false,
  isAppLoading: true
};

export const AuthContext = createContext<AuthContextType>(initialState);

function AuthProvider({ children }: AuthContextProps): JSX.Element {
  // const dispatch = useAppDispatch();
  const userRole = useAppSelector(getUserRole);
  const isAuth = useAppSelector(getIsAuthSelector);
  const isAppLoading = useAppSelector(getIsAppLoadingSelector);

  const values = useMemo(() => {
    return {
      isAuth: isAuth,
      userRole: userRole,
      isStudentRole: userRole === "student",
      isTeacherRole: userRole === "teacher",
      isAppLoading: isAppLoading
    };
  }, [isAuth, userRole, isAppLoading]);

  useEffect(() => {
    // dispatch(initializeApp());
  }, []);

  return (
    <AuthContext.Provider value={values}>
      <>
        {isAppLoading && <AppLoader />}
        {children}
      </>
    </AuthContext.Provider>
  );
}

const AuthProviderMemo = memo(AuthProvider);

export { AuthProviderMemo as AuthProvider };
