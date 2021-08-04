import { isAuthorized } from "@monorepo/casl";
import React, { FC, useMemo } from "react";
import { useAuthorization } from "../../hooks";
import { AuthorizedComponentProps } from "./types";

export const AuthorizedComponent: FC<AuthorizedComponentProps> = ({
    children,
    permissions,
    redirectTo
}) => {
    const ability = useAuthorization();

    const authorized = useMemo(
        () => isAuthorized(ability, permissions),
        [ability, permissions]
    );

    return <>{authorized ? children : redirectTo}</>;
};
