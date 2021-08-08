import { Card, CardContent, Divider, Icon } from "@material-ui/core";
import React, { FC } from "react";
import { useBoolean } from "react-use";
import { OverlaySpinner, Page } from "../../components";
import { SocialLogins } from "./components";
import { LoginForm } from "./components/LoginForm";
import { useStyles } from "./style";

export const Login: FC = () => {
    const classes = useStyles();
    const [loggingIn, setLoggingIn] = useBoolean(false);

    const onClick = () => {
        setLoggingIn(true);
    };

    return (
        <Page>
            <div className={classes.loginPage}>
                <Card className={classes.loginCard} elevation={0}>
                    {loggingIn && <OverlaySpinner />}
                    <CardContent>
                        <Icon color="inherit">home</Icon>
                        <SocialLogins onClick={onClick} />
                        <Divider
                            variant="middle"
                            style={{
                                marginTop: "16px",
                                marginBottom: "16px"
                            }}
                        />
                        <LoginForm setLoading={setLoggingIn} />
                    </CardContent>
                </Card>
            </div>
        </Page>
    );
};
