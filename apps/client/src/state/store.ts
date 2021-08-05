import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { RootReducer } from "./reducer";

export const Store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware => {
        if (process.env.NODE_ENV !== "production") {
            return getDefaultMiddleware().concat(logger);
        }

        return getDefaultMiddleware();
    },
    devTools: process.env.NODE_ENV !== "production"
});
