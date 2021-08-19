import { createElement } from "react";
import { Redirect, Route } from "react-router-dom";
import { typeInitialRoute } from "../@types";

export function PrivateRoute({ component, authentication, ...rest }: typeInitialRoute) {
  return (
    <Route {...rest}
      render={props =>
        authentication ? (createElement(component, props)) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}