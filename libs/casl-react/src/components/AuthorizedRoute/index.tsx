import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthorizedComponent } from "../AuthorizedComponent";
import { AuthorizedRouteProps } from "./types";

export const AuthorizedRoute: FC<AuthorizedRouteProps> = ({
    children,
    permissions,
    redirectTo = "/",
    ...rest
}) => (
    <Route {...rest}>
        <AuthorizedComponent
            permissions={permissions}
            redirectTo={<Redirect to={redirectTo} />}
        >
            {children}
        </AuthorizedComponent>
    </Route>
);
