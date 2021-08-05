import { makeStyles } from "@material-ui/core";

export const useUtilStyles = makeStyles(theme => ({
    centerPage: {
        flex: "auto",
        minHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textCenter: {
        textAlign: "center"
    },
    marginTop2: {
        marginTop: theme.spacing(2)
    },
    marginTop1: {
        marginTop: theme.spacing(1)
    },
    marginBottom1: {
        marginBottom: theme.spacing(1)
    },
    marginBottom2: {
        marginBottom: theme.spacing(2)
    },
    marginBottom3: {
        marginBottom: theme.spacing(3)
    },
    marginBottom4: {
        marginBottom: theme.spacing(4)
    },
    flexCenter: {
        display: "flex",
        alignItems: "center"
    },
    marginRight1: {
        marginRight: theme.spacing(1)
    }
}));
