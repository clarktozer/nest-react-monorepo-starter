import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCookie, useMount } from "react-use";
import { useAuthorization } from "../../../libs/casl-react/lib";
import { defineRules } from "../../../libs/casl/lib";
import { Header } from "./components";
import { DarkTheme, LightTheme, ThemeType } from "./constants";
import { Routes } from "./routes";
import { getLoggedInUser } from "./state";

export const App = () => {
    const ability = useAuthorization();
    const user = useSelector(getLoggedInUser);
    const [themeCookie, updateCookie] = useCookie("theme");
    const isDarkTheme = themeCookie === ThemeType.Dark;
    const theme = isDarkTheme ? DarkTheme : LightTheme;

    useMount(() => {
        //call /auth
        //if user comes back set in state
        //setting in state will trigger authz to generate
    });

    useEffect(() => {
        defineRules(user?.role, ability);
    }, [user]);

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
