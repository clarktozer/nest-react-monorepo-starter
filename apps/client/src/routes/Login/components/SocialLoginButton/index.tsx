import { Button } from "@material-ui/core";
import classnames from "classnames";
import { FC } from "react";
import { useStyles } from "./style";
import { SocialLoginButtonProps } from "./types";

export const SocialLoginButton: FC<SocialLoginButtonProps> = ({
    children,
    href,
    icon,
    className = "",
    color,
    onClick
}) => {
    const classes = useStyles();

    return (
        <Button
            className={classnames(classes.root, {
                [className]: className !== undefined
            })}
            size="medium"
            color={color}
            variant="contained"
            startIcon={icon}
            disableElevation
            href={href}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
