import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { getLoggedInUser } from "../../state";

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
    const user = useSelector(getLoggedInUser);

    if (!user) {
        return <Redirect to="/login" />;
    }

    return <Route {...rest}>{children}</Route>;
};
