import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        textTransform: "none",
        backgroundColor: "#fff",
        "&:hover": {
            backgroundColor: "#EBEBEB"
        }
    }
}));
