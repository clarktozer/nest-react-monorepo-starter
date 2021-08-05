import { defineRules } from "@monorepo/casl";
import { useAuthorization } from "@monorepo/casl-react";
import axios from "axios";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useAsync } from "react-use";
import { setUser, User } from "../../state";

export const AuthRedirect: FC = () => {
    const dispatch = useDispatch();
    const ability = useAuthorization();

    const { loading, error } = useAsync(async () => {
        const { data } = await axios.get<User>("/api/auth");

        if (data) {
            dispatch(setUser(data));
            defineRules(data.role, ability);
        }
    });

    if (error) {
        return <div>Error</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return <Redirect to="/" />;
};
