import { useAbility } from "@casl/react";
import { AbilityContext } from "../context";

export const useAuthorization = () => useAbility(AbilityContext);
