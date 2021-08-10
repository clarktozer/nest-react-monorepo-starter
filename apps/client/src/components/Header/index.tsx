import {
    AppBar,
    Avatar,
    Button,
    ButtonBase,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useAsyncFn } from "react-use";
import { clearUser, getLoggedInUser } from "../../state";
import { ErrorBanner } from "../ErrorBanner";
import { useStyles } from "./style";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ onToggleTheme, isDarkTheme }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector(getLoggedInUser);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = "primary-menu";

    const [{ error }, logout] = useAsyncFn(async () => {
        await axios.post("/api/auth/logout");
        dispatch(clearUser());
    });

    const handleLogOut = async () => {
        handleMenuClose();
        logout();
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleGoToProfile = () => {
        if (user) {
            history.push("/profile");
        }

        handleMenuClose();
    };

    const avatar = user && (
        <ButtonBase focusRipple onClick={handleProfileMenuOpen}>
            <Avatar alt={user.name} src={user.avatar} />
        </ButtonBase>
    );

    const desktopProfile = avatar || (
        <Button
            size="medium"
            color="primary"
            variant="contained"
            component={RouterLink}
            to="/login"
            startIcon={<Icon>login</Icon>}
            disableElevation
        >
            Sign In
        </Button>
    );

    const themeButton = (
        <IconButton
            color="inherit"
            onClick={onToggleTheme}
            className={classes.menuButton}
        >
            {isDarkTheme ? (
                <Icon>brightness_high</Icon>
            ) : (
                <Icon>brightness_4</Icon>
            )}
        </IconButton>
    );

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleGoToProfile}>
                <Icon className={classes.menuIcon}>person</Icon>Profile
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
                <Icon className={classes.menuIcon}>exit_to_app</Icon>Logout
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar
                position="sticky"
                color="inherit"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        edge="start"
                        color="inherit"
                        component={RouterLink}
                        to="/"
                    >
                        <Icon>home</Icon>
                    </IconButton>
                    <div className={classes.grow} />
                    <div>
                        <Tooltip title="Toggle light/dark theme">
                            {themeButton}
                        </Tooltip>
                        {desktopProfile}
                    </div>
                </Toolbar>
                {renderMenu}
            </AppBar>
            {error && (
                <ErrorBanner description="Sorry! We weren't able to log you out. Please try again later!" />
            )}
        </>
    );
};
