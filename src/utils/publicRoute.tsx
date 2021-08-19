import { createElement } from "react";
import { Redirect, Route } from "react-router-dom";
import { typeInitialRoute } from "../@types";

export function PublicRoute({ component, authentication, ...rest }: typeInitialRoute) {
    return (
        <Route
            {...rest}
            render={props =>
                authentication ? (<Redirect to={{ pathname: "/" }} />) :
                    (createElement(component, props))
            }
        />
    )
}