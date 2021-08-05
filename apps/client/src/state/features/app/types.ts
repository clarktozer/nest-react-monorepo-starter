import { Role } from "@monorepo/casl";

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: Role;
}

export interface AppState {
    user: User | null;
}
