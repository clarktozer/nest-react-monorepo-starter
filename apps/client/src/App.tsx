import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { defineRules } from "@monorepo/casl";
import { useAuthorization } from "@monorepo/casl-react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAsyncFn, useCookie, useMount } from "react-use";
import { CenterSpinner, Header, HeaderSkeleton } from "./components";
import { DarkTheme, LightTheme, ThemeType, THEME_COOKIE } from "./constants";
import { Routes } from "./routes";
import { getLoggedInUser, setUser, User } from "./state";

export const App = () => {
    const dispatch = useDispatch();
    const ability = useAuthorization();
    const user = useSelector(getLoggedInUser);
    const [themeCookie, updateCookie] = useCookie(THEME_COOKIE);
    const isDarkTheme = themeCookie === ThemeType.Dark;
    const theme = isDarkTheme ? DarkTheme : LightTheme;

    const [{ loading }, getUser] = useAsyncFn(
        async () => {
            const { data } = await axios.get<User>("/api/auth");
            dispatch(setUser(data?.id ? data : null));
        },
        [],
        {
            loading: true
        }
    );

    useMount(() => {
        getUser();
    });

    useEffect(() => {
        defineRules(user?.role, ability);
    }, [user, ability]);

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
                {loading ? (
                    <>
                        <HeaderSkeleton />
                        <CenterSpinner />
                    </>
                ) : (
                    <>
                        <Header
                            isDarkTheme={isDarkTheme}
                            onToggleTheme={onToggleTheme}
                        />
                        <Routes />
                    </>
                )}
            </div>
        </ThemeProvider>
    );
};
