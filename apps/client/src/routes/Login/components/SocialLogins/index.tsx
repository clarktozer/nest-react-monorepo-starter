import React, { FC } from "react";
import { SocialLoginButton } from "../SocialLoginButton";
import { useStyles } from "./style";
import { facebookSvg, googleSvg, linkedinSvg } from "./svgs";
import { SocialLoginsProps } from "./types";

export const SocialLogins: FC<SocialLoginsProps> = ({ onClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.loginButtons}>
            <SocialLoginButton
                className={classes.googleLogin}
                color="default"
                icon={googleSvg}
                href={`http://localhost:4000/api/auth/google`}
                onClick={onClick}
            >
                Sign in with Google
            </SocialLoginButton>
            <SocialLoginButton
                className={classes.facebookLogin}
                color="default"
                icon={facebookSvg}
                href={`http://localhost:4000/api/auth/facebook`}
                onClick={onClick}
            >
                Sign in with Facebook
            </SocialLoginButton>
            <SocialLoginButton
                className={classes.githubLogin}
                color="default"
                icon={linkedinSvg}
                href={`http://localhost:4000/api/auth/linkedin`}
                onClick={onClick}
            >
                Sign in with LinkedIn
            </SocialLoginButton>
        </div>
    );
};
