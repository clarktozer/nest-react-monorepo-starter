import { Container } from "@material-ui/core";
import classnames from "classnames";
import React, { FC } from "react";
import { useStyles } from "./style";
import { PageProps } from "./types";

export const Page: FC<PageProps> = ({ children, className }) => {
    const classes = useStyles();

    return (
        <Container
            className={classnames(classes.contentContainer, {
                [className!]: className !== undefined
            })}
            maxWidth="xl"
        >
            <>{children}</>
        </Container>
    );
};
