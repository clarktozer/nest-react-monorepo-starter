import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    loginPage: {
        flex: "auto",
        minHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    loginCard: {
        maxWidth: "24rem",
        textAlign: "center",
        position: "relative"
    }
}));
