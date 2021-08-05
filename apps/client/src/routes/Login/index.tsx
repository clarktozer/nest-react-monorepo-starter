import { Card, CardContent, Icon } from "@material-ui/core";
import React, { FC } from "react";
import { useBoolean } from "react-use";
import { OverlaySpinner, Page } from "../../components";
import { SocialLogins } from "./components";
import { useStyles } from "./style";

export const Login: FC = () => {
    const classes = useStyles();
    const [loggingIn, setLoggingIn] = useBoolean(false);

    const onSocialClick = () => {
        setLoggingIn(true);
    };

    return (
        <Page>
            <div className={classes.loginPage}>
                <Card className={classes.loginCard} elevation={0}>
                    {loggingIn ? <OverlaySpinner /> : null}
                    <CardContent>
                        <Icon color="inherit">home</Icon>
                        <SocialLogins onClick={onSocialClick} />
                    </CardContent>
                </Card>
            </div>
        </Page>
    );
};
