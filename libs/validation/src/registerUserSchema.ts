import * as yup from "yup";
import { userSchema } from "./userSchema";

export const registerUserSchema = yup
    .object({
        name: yup.string().required("Please enter your name!")
    })
    .concat(userSchema);
