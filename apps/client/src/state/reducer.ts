import { combineReducers } from "@reduxjs/toolkit";
import { AppReducer } from "./features";

export const RootReducer = combineReducers({
    app: AppReducer
});

export type RootState = ReturnType<typeof RootReducer>;
