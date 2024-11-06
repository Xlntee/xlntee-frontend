import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store/store";
import { UserRole } from "src/shared/utils/enum";

export interface IUserState {
  role: string;
}
export const getUser = (state: RootState): IUserState => state.user;

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: ""
  },
  reducers: {
    setRole: (state: IUserState, action: PayloadAction<{ role: string }>) => {
      const { role } = action.payload;
      state.role = role;
    },
    switchRole: (state: IUserState) => {
      const role = state.role;
      if (role === UserRole.STUDENT) {
        state.role = UserRole.TEACHER;
      }
      if (role === UserRole.TEACHER) {
        state.role = UserRole.STUDENT;
      }
    }
  }
});

export const { switchRole, setRole } = userSlice.actions;

export default userSlice.reducer;
