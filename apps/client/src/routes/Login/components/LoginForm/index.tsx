import { Button, Link, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { userSchema } from "@monorepo/validation";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useAsyncFn } from "react-use";
import { setUser, User } from "../../../../state";
import { useStyles } from "./style";
import { LoginFormProps, LoginUserDto } from "./types";

const initialValues: LoginUserDto = {
    email: "",
    password: ""
};

export const LoginForm: FC<LoginFormProps> = ({ setLoading }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [{ loading, error }, signIn] = useAsyncFn(
        async (values: LoginUserDto) => {
            const { data } = await axios.post<User>("/api/auth/login", values);
            const user = data?.id ? data : null;
            dispatch(setUser(user));

            if (user) {
                history.push("/");
            }
        }
    );

    useEffect(() => {
        setLoading(loading);
    }, [loading, setLoading]);

    const onSignIn = (values: LoginUserDto) => {
        signIn(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={onSignIn}
        >
            {({ handleChange, values, touched, errors }) => (
                <Form noValidate>
                    <TextField
                        className={classes.field}
                        required
                        fullWidth
                        variant="outlined"
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        FormHelperTextProps={{
                            variant: "standard"
                        }}
                        tabIndex={-1}
                    />
                    <TextField
                        className={classes.field}
                        required
                        fullWidth
                        variant="outlined"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={values.password || ""}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        FormHelperTextProps={{
                            variant: "standard"
                        }}
                        tabIndex={-1}
                    />
                    <Button
                        disabled={loading}
                        size="medium"
                        color="primary"
                        variant="contained"
                        disableElevation
                        type="submit"
                    >
                        Sign In
                    </Button>
                    {error && (
                        <Alert className={classes.alert} severity="error">
                            Sorry there was a problem signing you in!
                        </Alert>
                    )}
                    <div className={classes.alert}>
                        <Typography variant="caption">
                            Haven't got an account? Register{" "}
                            <Link
                                color="secondary"
                                component={RouterLink}
                                to="/register"
                            >
                                here
                            </Link>
                        </Typography>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
