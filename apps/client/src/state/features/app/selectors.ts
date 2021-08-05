import { RootState } from "../../reducer";

export const getLoggedInUser = ({ app }: RootState) => app.user;
