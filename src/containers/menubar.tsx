import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  HomeOutlined as HomeIcon,
  BookOutlined as BookIcon,
  CategoryOutlined as CategoryIcon,
  LibraryBooks as LibraryIcon,
} from "@material-ui/icons";
import { Link, RouteComponentProps } from "react-router-dom";
import classnames from "classnames";
import useStyles from "../styles";

declare interface TheMenuBarProps {
  key: number;
  to: string;
  nameMenu: string;
  location: RouteComponentProps["location"];
  isSidebarOpened: boolean;
}
const TheMenuBar = ({
  to,
  nameMenu,
  location,
  isSidebarOpened,
}: TheMenuBarProps) => {
  const classes = useStyles();
  const isLinkActive =
    to && (location.pathname === to || location.pathname.indexOf(to) !== -1);

  return (
    <>
      <ListItem
        button
        component={typeof Link !== "undefined" ? Link : "link"}
        to={to}
        className={classes.link}
        classes={{
          root: classnames({
            [classes.linkActive]: isLinkActive,
          }),
        }}
        disableRipple
      >
        <ListItemIcon>
          {nameMenu === "Home" ? (
            <HomeIcon />
          ) : nameMenu === "Libros" ? (
            <BookIcon />
          ) : nameMenu === "Alquileres" ? (
            <LibraryIcon />
          ) : (
            <CategoryIcon />
          )}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={nameMenu}
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default TheMenuBar;
