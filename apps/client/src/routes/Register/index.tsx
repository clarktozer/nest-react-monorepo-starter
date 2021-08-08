import {
    Button,
    Card,
    CardContent,
    Icon,
    TextField,
    Typography
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { registerUserSchema } from "@monorepo/validation";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useAsyncFn, useBoolean, useCounter, useInterval } from "react-use";
import { OverlaySpinner, Page } from "../../components";
import { useStyles } from "./style";
import { RegisterUserDto } from "./types";

const initialValues: RegisterUserDto = {
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
};

export const Register: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isRunning, setRunning] = useBoolean(false);
    const [count, { dec }] = useCounter(5, 5, 0);

    const [{ loading, error }, register] = useAsyncFn(
        async (values: RegisterUserDto) => {
            await axios.post("/api/auth/register", values);
            setRunning();
        }
    );

    const onRegister = (values: RegisterUserDto) => {
        register(values);
    };

    useInterval(
        () => {
            if (count === 0) {
                setRunning();
                history.push("/login");
            } else {
                dec();
            }
        },
        isRunning ? 1000 : null
    );

    return (
        <Page>
            <div className={classes.loginPage}>
                <Card className={classes.loginCard} elevation={0}>
                    {loading && <OverlaySpinner />}
                    <CardContent>
                        <Icon color="inherit">home</Icon>
                        <div
                            style={{
                                marginTop: "16px"
                            }}
                        >
                            {isRunning ? (
                                <>
                                    <Typography>
                                        Thanks for signing up!
                                    </Typography>
                                    <Typography>
                                        Redirecting you to login in {count}...
                                    </Typography>
                                </>
                            ) : (
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={registerUserSchema}
                                    onSubmit={onRegister}
                                >
                                    {({
                                        handleChange,
                                        values,
                                        touched,
                                        errors
                                    }) => (
                                        <Form noValidate>
                                            <TextField
                                                className={classes.field}
                                                required
                                                fullWidth
                                                variant="outlined"
                                                id="name"
                                                name="name"
                                                label="Name"
                                                type="text"
                                                value={values.name || ""}
                                                onChange={handleChange}
                                                error={
                                                    touched.name &&
                                                    Boolean(errors.name)
                                                }
                                                helperText={
                                                    touched.name && errors.name
                                                }
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
                                                id="email"
                                                name="email"
                                                label="Email"
                                                type="email"
                                                value={values.email || ""}
                                                onChange={handleChange}
                                                error={
                                                    touched.email &&
                                                    Boolean(errors.email)
                                                }
                                                helperText={
                                                    touched.email &&
                                                    errors.email
                                                }
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
                                                error={
                                                    touched.password &&
                                                    Boolean(errors.password)
                                                }
                                                helperText={
                                                    touched.password &&
                                                    errors.password
                                                }
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
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                label="Confirm Password"
                                                type="password"
                                                value={
                                                    values.confirmPassword || ""
                                                }
                                                onChange={handleChange}
                                                error={
                                                    touched.confirmPassword &&
                                                    Boolean(
                                                        errors.confirmPassword
                                                    )
                                                }
                                                helperText={
                                                    touched.confirmPassword &&
                                                    errors.confirmPassword
                                                }
                                                FormHelperTextProps={{
                                                    variant: "standard"
                                                }}
                                                tabIndex={-1}
                                            />
                                            <Button
                                                disabled={loading || isRunning}
                                                size="medium"
                                                color="primary"
                                                variant="contained"
                                                disableElevation
                                                type="submit"
                                            >
                                                Register
                                            </Button>
                                            {error && (
                                                <Alert
                                                    className={classes.alert}
                                                    severity="error"
                                                >
                                                    Sorry there was a problem
                                                    signing you up!
                                                </Alert>
                                            )}
                                        </Form>
                                    )}
                                </Formik>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Page>
    );
};
