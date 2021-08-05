import { CircularProgress, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./style";
import { CenterSpinnerProps } from "./types";

export const CenterSpinner: FC<CenterSpinnerProps> = ({ size = 60, label }) => {
    const classes = useStyles();

    return (
        <div className={classes.centerSpinner}>
            <CircularProgress color="primary" size={size} />
            {label && (
                <div className={classes.labelContainer}>
                    <Typography>{label}</Typography>
                </div>
            )}
        </div>
    );
};
