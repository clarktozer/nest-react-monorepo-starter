import { CircularProgress } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./style";

export const OverlaySpinner: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.overlaySpinner}>
            <CircularProgress />
        </div>
    );
};
