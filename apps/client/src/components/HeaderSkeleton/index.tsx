import { AppBar, Icon, IconButton, Toolbar } from "@material-ui/core";
import React from "react";
import { useStyles } from "../Header/style";

export const HeaderSkeleton = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    edge="start"
                    color="inherit"
                >
                    <Icon>home</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
