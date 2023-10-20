import { combineReducers } from "redux";
import cashReducer from "./cashReducer";

export const rootReducer = combineReducers({
  cash: cashReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
