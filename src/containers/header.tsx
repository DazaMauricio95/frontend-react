import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  Grid,
  Menu,
  Avatar,
  Divider,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MenuOpen as MenuCloseIcon,
  Brightness2 as MoonIcon,
  Brightness7 as SunIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from "@material-ui/icons";
import { useState } from "react";
import { ToggleSidebar, UseLayoutDispatch, UseLayoutState } from "../contexts";
import UseStyles from "../styles";
import classNames from "classnames";
import { TheHeaderProps } from "../utils";
import { UseHookTheme, UseHookLogin } from "../hooks";
import { modelUser } from "../models";
import { config } from "../config";

export type Anchor = "top" | "left" | "bottom" | "right";

const TheHeader = ({ history }: TheHeaderProps) => {
  const classes = UseStyles();
  const { urlPublic } = config;
  const [profileMenu, setProfileMenu] = useState(null);
  //Global
  const layoutDispatch = UseLayoutDispatch();
  const { isSidebarOpened } = UseLayoutState();
  const { themeIsDark, changeTheme } = UseHookTheme();
  const { logoutUser } = UseHookLogin();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => ToggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse
          )}
        >
          {isSidebarOpened ? (
            <MenuCloseIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" component="h6" className={classes.logotype}>
          Mi Biblioteca
        </Typography>
        <div className={classes.grow} />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
              <SunIcon />
            </Grid>
            <Grid item>
              <Switch
                color="default"
                value={themeIsDark}
                onChange={() =>
                  themeIsDark ? changeTheme(false) : changeTheme(true)
                }
              />
            </Grid>
            <Grid item>
              <MoonIcon />
            </Grid>
          </Grid>
        </Typography>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(e: any) => setProfileMenu(e.currentTarget)}
        >
          <Avatar
            alt={modelUser.name + " " + modelUser.lastname}
            src={urlPublic + modelUser.photo}
          />
        </IconButton>
        <Typography component="p">
          {modelUser.name + " " + modelUser.lastname}
        </Typography>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
          style={{ marginBottom: 0 }}
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h5" component="p">
              {modelUser.name + " " + modelUser.lastname}
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              href="#"
            >
              {modelUser.email}
            </Typography>
          </div>
          <Divider />
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              variant="subtitle2"
              component="p"
              onClick={() => logoutUser()}
            >
              <PowerSettingsNewIcon className={classes.profileMenuIcon} />
              Desconectarse
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
