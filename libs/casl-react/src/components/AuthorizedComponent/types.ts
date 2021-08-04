import { AuthorizationMap } from "@monorepo/casl";

export interface AuthorizedComponentProps {
    permissions: AuthorizationMap[];
    redirectTo?: React.ReactNode;
}
