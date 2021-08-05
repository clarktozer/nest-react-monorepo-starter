import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Page } from "../../components";
import { getLoggedInUser } from "../../state";

export const User: FC = () => {
    const user = useSelector(getLoggedInUser);

    return <Page>{user && JSON.stringify(user)}</Page>;
};
