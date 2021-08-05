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
import { clearUser, getLoggedInUser } from "../../state";
import { useStyles } from "./style";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ onToggleTheme, isDarkTheme }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector(getLoggedInUser);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const menuId = "primary-menu";
    const mobileMenuId = "primary-menu-mobile";

    const handleLogOut = async () => {
        handleMenuClose();
        await axios.post("/api/auth/logout");
        dispatch(clearUser());
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleGoToProfile = () => {
        if (user) {
            history.push(`/user/${user.id}`);
        }

        handleMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
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

    const mobileProfile = avatar || (
        <IconButton color="inherit" component={RouterLink} to="/login">
            <Icon>login</Icon>
        </IconButton>
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

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>{themeButton}</MenuItem>
            <MenuItem
                className={classes.mobileAvatar}
                onClick={user ? handleProfileMenuOpen : undefined}
            >
                {mobileProfile}
            </MenuItem>
        </Menu>
    );

    return (
        <AppBar position="sticky" color="inherit" className={classes.appBar}>
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
                <div className={classes.sectionDesktop}>
                    <Tooltip title="Toggle light/dark theme">
                        {themeButton}
                    </Tooltip>

                    {desktopProfile}
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        className={classes.more}
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <Icon>more_horiz</Icon>
                    </IconButton>
                </div>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </AppBar>
    );
};
