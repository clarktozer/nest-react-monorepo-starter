import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    overlaySpinner: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: ".65",
        background:
            theme.palette.type === "light"
                ? theme.palette.common.white
                : theme.palette.grey[800],
        zIndex: 1
    }
}));
