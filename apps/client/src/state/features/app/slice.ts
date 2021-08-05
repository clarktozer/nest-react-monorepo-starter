import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, User } from "./types";

const initialState: AppState = {
    user: null
};

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        }
    }
});

export const { setUser, clearUser } = slice.actions;

export const AppReducer = slice.reducer;
