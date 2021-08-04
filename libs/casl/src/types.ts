import { Ability } from "@casl/ability";

export enum Role {
    Admin = "admin",
    Editor = "editor",
    Reader = "reader"
}

export enum Action {
    Manage = "manage",
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete"
}

export enum Subject {
    All = "all",
    Users = "users",
    Orders = "orders"
}

export type AppAbility = Ability<[Action, Subject]>;

export type AuthorizationMap = Partial<Record<Subject, Action>>;
