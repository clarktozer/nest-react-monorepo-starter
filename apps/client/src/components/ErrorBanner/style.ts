import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    alert: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            paddingRight: theme.spacing(3),
            paddingLeft: theme.spacing(3)
        }
    }
}));
