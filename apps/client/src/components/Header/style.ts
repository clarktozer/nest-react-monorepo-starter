import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    grow: {
        display: "none",
        flexGrow: 1,
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    },
    menuIcon: {
        marginRight: "10px"
    },
    sectionMobile: {
        display: "flex",
        marginLeft: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    mobileAvatar: {
        display: "flex",
        justifyContent: "center"
    },
    more: {
        paddingRight: 0,
        [theme.breakpoints.up("sm")]: {
            paddingRight: "12px"
        }
    },
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    drawerContainer: {
        overflow: "auto"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));
