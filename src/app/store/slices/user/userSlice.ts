import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppRoutes } from "src/app/routing/appRoutes";
import { RootState } from "src/app/store/store";
import { UserRole } from "src/shared/utils/enum";

export interface IUserState {
  role: string;
  userRolePath: string;
}
export const getUser = (state: RootState) => state.user;

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: "",
    userRolePath: "",
  },
  reducers: {
    setRole: (state: IUserState, action: PayloadAction<{ role: string; userRolePath: string }>) => {
      const { role, userRolePath } = action.payload;
      state.role = role;
      state.userRolePath = userRolePath;
    },
    switchRole: (state: IUserState) => {
      const role = state.role;
      if (role === UserRole.STUDENT) {
        state.role = UserRole.TEACHER;
        state.userRolePath = AppRoutes.teacher.dashboard;
      }
      if (role === UserRole.TEACHER) {
        state.role = UserRole.STUDENT;
        state.userRolePath = AppRoutes.student.dashboard;
      }
    },
  },
});

export const { switchRole, setRole } = userSlice.actions;

export default userSlice.reducer;
