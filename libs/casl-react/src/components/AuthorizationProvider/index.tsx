import { defineRules } from "@monorepo/casl";
import React, { FC, useMemo } from "react";
import { AbilityContext } from "../../context";
import { AuthorizationProviderProps } from "./types";

export const AuthorizationProvider: FC<AuthorizationProviderProps> = ({
    role,
    children
}) => {
    const ability = useMemo(() => defineRules(role), [role]);

    return (
        <AbilityContext.Provider value={ability}>
            {children}
        </AbilityContext.Provider>
    );
};
