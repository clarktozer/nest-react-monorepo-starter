import { Collapse, Icon, IconButton } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React, { FC } from "react";
import { useBoolean } from "react-use";
import { useStyles } from "./style";
import { ErrorBannerProps } from "./types";

export const ErrorBanner: FC<ErrorBannerProps> = ({
    message = "Uh oh! Something went wrong :(",
    description = "Look like something went wrong. Please check your connection and/or try again later."
}) => {
    const classes = useStyles();
    const [open, setOpen] = useBoolean(true);

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Collapse in={open}>
            <Alert
                severity="error"
                action={
                    <IconButton color="inherit" size="small" onClick={onClose}>
                        <Icon>close</Icon>
                    </IconButton>
                }
                className={classes.alert}
            >
                <AlertTitle>{message}</AlertTitle>
                {description}
            </Alert>
        </Collapse>
    );
};
