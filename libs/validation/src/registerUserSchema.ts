import * as yup from 'yup';

export const registerUserSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required().min(8).max(20),
});
