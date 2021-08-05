import { Ability, AbilityBuilder } from "@casl/ability";
import { Action, AppAbility, AuthorizationMap, Role, Subject } from "./types";

export const defineRules = (role: Role = Role.Reader, ability?: AppAbility) => {
    const { can, build, rules } = new AbilityBuilder<AppAbility>(Ability);

    defineRulesForRole(can, role);

    if (ability) {
        ability.update(rules);

        return ability;
    }

    return build();
};

export const isAuthorized = (
    ability: AppAbility,
    permissions: AuthorizationMap[]
) => {
    const ands = permissions.map(permission =>
        Object.keys(permission).every((subject: Subject) =>
            ability.can(permission[subject], subject)
        )
    );

    return ands.some(Boolean);
};

const defineRulesForRole = (
    can: AbilityBuilder<AppAbility>["can"],
    role: Role
) => {
    switch (role) {
        case Role.Admin:
            can(Action.Manage, Subject.All);
            break;
        case Role.Editor:
            can(Action.Manage, Subject.Users);
            can(Action.Read, Subject.Orders);
            break;
        case Role.Reader:
            can(Action.Read, Subject.Users);
            can(Action.Read, Subject.Orders);
            break;
        default:
            break;
    }
};
