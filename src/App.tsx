import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import { UseHookTheme, UseHookLogin } from "./hooks";
import { history, PrivateRoute, PublicRoute, themeMaterial } from "./utils";
import TheLayout from "./containers/layout";
import LoginModule from "./modules/login";
import RegisterModule from "./modules/register";
import { modelUser } from "./models";
function App() {
  const { authentication } = UseHookLogin();
  const { themeIsDark } = UseHookTheme();
  if (
    localStorage.getItem("@token") != null &&
    localStorage.getItem("@userData") != null
  ) {
    let token = localStorage.getItem("@token");
    let userData = localStorage.getItem("@userData");
    let datosUsuario = JSON.parse(userData != null ? userData : "");
    modelUser.id = datosUsuario.id;
    modelUser.token = token;
    modelUser.email = datosUsuario.email;
    modelUser.name = datosUsuario.name;
    modelUser.lastname = datosUsuario.lastname;
    modelUser.photo = datosUsuario.photo;
  }
  return (
    <MuiThemeProvider theme={themeMaterial(themeIsDark)}>
      <CssBaseline />
      <Router history={history}>
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/home" />} />
            <Route
              exact
              path="/app"
              render={() => <Redirect to="/app/home" />}
            />
            <PrivateRoute
              authentication={authentication}
              path="/app"
              component={TheLayout}
            />
            <PublicRoute
              authentication={authentication}
              path="/login"
              component={LoginModule}
            />
            <PublicRoute
              authentication={authentication}
              path="/register"
              component={RegisterModule}
            />
          </Switch>
        </HashRouter>
      </Router>
    </MuiThemeProvider>
  );
}
export default App;
