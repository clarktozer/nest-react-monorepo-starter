import { Typography } from "@material-ui/core";
import { Role } from "@monorepo/casl";
import axios from "axios";
import React, { FC } from "react";
import { useAsync } from "react-use";
import { CenterSpinner, ErrorPage, Page } from "../../components";
import { User } from "../../state";
import { useStyles } from "./style";

export const Users: FC = () => {
    const classes = useStyles();

    const { loading, error, value } = useAsync(async () => {
        const { data } = await axios.get<User[]>("/api/user");

        return data;
    });

    if (error) {
        return <ErrorPage />;
    }

    if (loading) {
        return <CenterSpinner />;
    }

    return (
        <Page>
            <Typography variant="h3" gutterBottom>
                Users
            </Typography>
            {value?.map(user => (
                <div key={user.id} className={classes.reader}>
                    <Typography>Name: {user.name}</Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Typography>
                        Admin: {user.role === Role.Admin ? "Yes" : "No"}
                    </Typography>
                </div>
            ))}
        </Page>
    );
};
