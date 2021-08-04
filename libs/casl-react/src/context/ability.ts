import { createContextualCan } from "@casl/react";
import { AppAbility } from "@monorepo/casl";
import { createContext } from "react";

export const AbilityContext = createContext<AppAbility>(null);

export const Can = createContextualCan(AbilityContext.Consumer);
