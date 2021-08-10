import { Typography } from "@material-ui/core";
import { Role } from "@monorepo/casl";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Page } from "../../components";
import { getLoggedInUser } from "../../state";

export const Profile: FC = () => {
    const user = useSelector(getLoggedInUser);

    return (
        <Page>
            <Typography variant="h3" gutterBottom>
                Profile
            </Typography>
            <Typography>Name: {user!!.name}</Typography>
            <Typography>Email: {user!!.email}</Typography>
            <Typography>
                Admin: {user!!.role === Role.Admin ? "Yes" : "No"}
            </Typography>
        </Page>
    );
};
