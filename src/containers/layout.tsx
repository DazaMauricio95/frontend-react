import { Fragment } from "react";
import { Grid } from "@material-ui/core";
import classnames from "classnames";
import { Route, Switch, withRouter } from "react-router-dom";
import UseStyles from "../styles";
import { UseLayoutState } from "../contexts";
import { routes } from "../config";
import TheHeader from "./header";
import TheSiderBar from "./sidebar";

const TheLayout = ({ ...props }) => {
  const { history } = props;
  const classes = UseStyles();
  const { isSidebarOpened } = UseLayoutState();

  return (
    <Grid component="div" container className={classes.containerLayout}>
      <TheHeader history={history} />
      <TheSiderBar />
      <Grid
        component="div"
        className={classnames(classes.contentLayout, {
          [classes.contentShift]: isSidebarOpened,
        })}
      >
        <Switch>
          {routes.map((item, idx) => (
            <Route
              key={idx}
              path={item.path}
              render={(props) => {
                return (
                  <Fragment>
                    <item.component {...props} />
                  </Fragment>
                );
              }}
            />
          ))}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default withRouter(TheLayout);
