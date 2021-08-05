import axios from "axios";
import React, { FC } from "react";

export const AuthRedirect: FC = () => {
    axios.get("/api/auth").then(console.log);

    return <div></div>;
};
