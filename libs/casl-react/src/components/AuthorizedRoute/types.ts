import { AuthorizationMap } from "@monorepo/casl";
import { RouteProps } from "react-router-dom";

export interface AuthorizedRouteProps extends RouteProps {
    permissions: AuthorizationMap[];
    redirectTo?: string;
}
