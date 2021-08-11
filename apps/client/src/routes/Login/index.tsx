import { Card, CardContent, Divider, Icon } from "@material-ui/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useBoolean, useSearchParam } from "react-use";
import { ErrorBanner, OverlaySpinner, Page } from "../../components";
import { getLoggedInUser } from "../../state";
import { SocialLogins } from "./components";
import { LoginForm } from "./components/LoginForm";
import { useStyles } from "./style";

export const Login: FC = () => {
    const classes = useStyles();
    const user = useSelector(getLoggedInUser);
    const [loggingIn, setLoggingIn] = useBoolean(false);
    const error = useSearchParam("error");

    const onClick = () => {
        setLoggingIn(true);
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <>
            {error && (
                <ErrorBanner description="Sorry! We weren't able to log you in. Please try again later!" />
            )}
            <Page>
                <div className={classes.loginPage}>
                    <Card className={classes.loginCard} elevation={0}>
                        {loggingIn && <OverlaySpinner />}
                        <CardContent>
                            <Icon color="inherit">home</Icon>
                            <SocialLogins onClick={onClick} />
                            <Divider
                                variant="middle"
                                className={classes.divider}
                            />
                            <LoginForm setLoading={setLoggingIn} />
                        </CardContent>
                    </Card>
                </div>
            </Page>
        </>
    );
};
