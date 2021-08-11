import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    field: {
        marginBottom: theme.spacing(2)
    },
    alert: {
        marginTop: theme.spacing(2)
    },
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
    },
    form: {
        marginTop: theme.spacing(2)
    }
}));
