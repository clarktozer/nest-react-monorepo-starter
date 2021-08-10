import { Link, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Page } from "../../components";

export const Home: FC = () => (
    <Page>
        <Typography variant="h3" gutterBottom>
            Welcome!
        </Typography>
        <Typography gutterBottom>
            Click on a route to see if you are authorized to view it.
        </Typography>
        <div>
            <Typography gutterBottom>
                Role.Reader:{" "}
                <Link color="secondary" component={RouterLink} to="/users">
                    Readers
                </Link>
            </Typography>
        </div>
        <div>
            <Typography gutterBottom>
                Role.Admin:{" "}
                <Link color="secondary" component={RouterLink} to="/admins">
                    Admins
                </Link>
            </Typography>
        </div>
    </Page>
);
