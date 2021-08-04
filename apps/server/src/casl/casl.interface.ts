import { AppAbility, AuthorizationMap } from '@monorepo/casl';

type AuthorizationHandlerCallback = (ability: AppAbility) => boolean;

export type AuthorizationHandler =
  | AuthorizationMap[]
  | AuthorizationHandlerCallback;
