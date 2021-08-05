import { Link } from "@material-ui/core";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Page } from "../../components";

export const Home: FC = () => {
    return (
        <Page>
            <div>
                <Link color="secondary" component={RouterLink} to="/users">
                    Users
                </Link>
            </div>
            <div>
                <Link color="secondary" component={RouterLink} to="/admins">
                    Admins
                </Link>
            </div>
        </Page>
    );
};
