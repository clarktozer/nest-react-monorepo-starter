import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    centerSpinner: {
        flex: "auto",
        minHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    labelContainer: {
        paddingTop: theme.spacing(3)
    }
}));
