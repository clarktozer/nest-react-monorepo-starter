import * as yup from "yup";

export const userSchema = yup.object({
    email: yup
        .string()
        .email("Please enter a valid email!")
        .required("Please enter a valid email!"),
    password: yup
        .string()
        .min(8, "Please enter a password with a minimum of 8 characters!")
        .required("Please enter a valid password!")
});
