import React, { FC } from "react";
import { ErrorPage } from "../../components";

export const NotAuthorized: FC = () => (
    <ErrorPage message="Uh oh, you are not allowed to view this page!" />
);
