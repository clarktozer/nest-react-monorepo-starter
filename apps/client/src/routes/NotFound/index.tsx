import React, { FC } from "react";
import { ErrorPage } from "../../components";

export const NotFound: FC = () => (
    <ErrorPage message="Uh oh, page not found!" />
);
