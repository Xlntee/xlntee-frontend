import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRoles, Role } from "src/shared/utils/user-role";
import { RootState } from "../../store";

export interface IUserState {
  role: Role | null;
}

const initialState: IUserState = {
  role: "teacher"
};

export const getUser = (state: RootState): IUserState => state.user;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole: (state: IUserState, action: PayloadAction<{ role: Role }>) => {
      const { role } = action.payload;
      state.role = role;
    },
    switchRole: (state: IUserState) => {
      const role = state.role;
      if (role === UserRoles.student) {
        state.role = UserRoles.teacher;
      }
      if (role === UserRoles.teacher) {
        state.role = UserRoles.student;
      }
    }
  }
});

export const { switchRole, setRole } = userSlice.actions;

export default userSlice.reducer;
