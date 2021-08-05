import axios from "axios";
import React, { FC } from "react";
import { useAsync } from "react-use";
import { User } from "../../state";

export const Users: FC = () => {
    const { loading, error, value } = useAsync(async () => {
        const { data } = await axios.get<User[]>("/api/user");

        return data;
    });

    if (error) {
        return <div>Error</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return <div>{JSON.stringify(value)}</div>;
};
