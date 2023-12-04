import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import { apiSlice } from "../api/apiSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
