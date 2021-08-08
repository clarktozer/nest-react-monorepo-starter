import * as yup from "yup";
import { userSchema } from "./userSchema";

export const registerUserSchema = yup
    .object({
        name: yup.string().required("Please enter your name!"),
        confirmPassword: yup
            .string()
            .required("Please enter a valid password!")
            .test(
                "passwords-match",
                "Your password much match!",
                function (value) {
                    return this.parent.password === value;
                }
            )
    })
    .concat(userSchema);
