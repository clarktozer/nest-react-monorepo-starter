import { Action, Subject } from "@monorepo/casl";
import { AuthorizedRoute } from "@monorepo/casl-react";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Admins } from "./Admins";
import { Home } from "./Home";
import { Login } from "./Login";
import { NotAuthorized } from "./NotAuthorized";
import { NotFound } from "./NotFound";
import { Profile } from "./Profile";
import { Register } from "./Register";
import { Users } from "./Users";

export const Routes: FC = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/register">
            <Register />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <AuthorizedRoute
            exact
            path="/admins"
            permissions={[
                {
                    [Subject.Users]: Action.Manage
                }
            ]}
            redirectTo="/not-authorized"
        >
            <Admins />
        </AuthorizedRoute>
        <AuthorizedRoute
            exact
            path="/users"
            permissions={[
                {
                    [Subject.Users]: Action.Read
                }
            ]}
            redirectTo="/not-authorized"
        >
            <Users />
        </AuthorizedRoute>
        <Route exact path="/profile">
            <Profile />
        </Route>
        <Route exact path="/not-authorized">
            <NotAuthorized />
        </Route>
        <Route component={NotFound} />
    </Switch>
);
