import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { useCookie } from "react-use";
import { Header } from "./components";
import { DarkTheme, LightTheme, ThemeType } from "./constants";
import { Routes } from "./routes";

export const App = () => {
    const [themeCookie, updateCookie] = useCookie("theme");
    const isDarkTheme = themeCookie === ThemeType.Dark;
    const theme = isDarkTheme ? DarkTheme : LightTheme;

    const onToggleTheme = () => {
        updateCookie(isDarkTheme ? ThemeType.Light : ThemeType.Dark);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    flex: "auto",
                    flexDirection: "column"
                }}
            >
                <Header
                    isDarkTheme={isDarkTheme}
                    onToggleTheme={onToggleTheme}
                />
                <Routes />
            </div>
        </ThemeProvider>
    );
};
