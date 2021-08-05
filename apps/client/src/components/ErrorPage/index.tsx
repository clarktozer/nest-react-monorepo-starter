import { Icon, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useUtilStyles } from "../../utils";
import { ErrorPageProps } from "./types";

export const ErrorPage: FC<ErrorPageProps> = ({
    message = "Uh oh, something went wrong!",
    icon = "error"
}) => {
    const utilStyles = useUtilStyles();

    return (
        <div className={utilStyles.centerPage}>
            <div className={utilStyles.textCenter}>
                <Icon color="inherit">{icon}</Icon>
                <Typography className={utilStyles.marginTop2}>
                    {message}
                </Typography>
            </div>
        </div>
    );
};
