import { createTheme } from "@material-ui/core";
import { defineRules } from "@monorepo/casl";

export enum ThemeType {
    Dark = "dark",
    Light = "light"
}

export const ThemeCookie = "hhtheme";

export const DarkTheme = createTheme({
    palette: {
        type: "dark"
    }
});

export const LightTheme = createTheme({
    palette: {
        type: "light"
    }
});

export const BaseAbility = defineRules();
