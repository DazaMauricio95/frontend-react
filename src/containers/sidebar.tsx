import { useEffect, useState } from "react";
import {
  Drawer,
  IconButton,
  Typography,
  List,
  Avatar,
  Box,
  Theme,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";
import { ToggleSidebar, UseLayoutDispatch, UseLayoutState } from "../contexts";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import ScrollBar from "react-perfect-scrollbar";
import useStyles from "../styles";
import { TheSidebarProps } from "../utils";
import { config, routes } from "../config";
import { modelUser } from "../models";
import TheMenuBar from "./menubar";

const TheSidebar = ({ location }: TheSidebarProps) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const { urlPublic } = config;
  const { isSidebarOpened } = UseLayoutState();
  const layoutDispatch = UseLayoutDispatch();
  const [isPermanent, setPermanent] = useState(true);
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });
  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => ToggleSidebar(layoutDispatch)}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      {isSidebarOpened && (
        <div className={classes.containerProfile}>
          <Box display="flex" justifyContent="center">
            <Avatar
              src={urlPublic + modelUser.photo}
              className={classes.avatarProfile}
              alt={modelUser.name + " " + modelUser.lastname}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            className={classes.contentProfile}
          >
            <Box zIndex={1}>
              <Typography component="p" className={classes.textProfile}>
                {modelUser.name + " " + modelUser.lastname}
              </Typography>
              <Typography component="p" className={classes.textProfile}>
                {modelUser.email}
              </Typography>
            </Box>
          </Box>
        </div>
      )}
      <List className={classes.sidebarList}>
        <ScrollBar>
          {routes.map((item, key) => {
            return (
              <TheMenuBar
                key={key}
                to={item.to}
                nameMenu={item.nameMenu}
                location={location}
                isSidebarOpened={isSidebarOpened}
              />
            );
          })}
        </ScrollBar>
      </List>
    </Drawer>
  );
};

export default withRouter(TheSidebar);
