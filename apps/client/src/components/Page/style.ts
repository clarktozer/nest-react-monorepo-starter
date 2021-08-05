import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    contentContainer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: "flex",
        flex: 1,
        flexDirection: "column"
    }
}));
