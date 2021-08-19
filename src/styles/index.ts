import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import UserBG from "../assets/images/user-bg.jpg";
const drawerWidth = 241;
export default makeStyles((theme: Theme) => ({
  containerLogin: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logoContainerLogin: {
    backgroundColor: theme.palette.primary.main,
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logoTextLogin: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  form: {
    width: 320,
  },
  greeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor: theme.palette.primary.light,
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "&:hover:before": {
      borderBottomColor: `${theme.palette.primary.light} !important`,
    },
  },
  textField: {
    // borderBottomColor: theme.palette.background.light,
    borderBottomColor: theme.palette.background.default,
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    ":disabled": {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  contentAvatarProfile: {
    justifyContent: "center",
    textAlign: "center",
    display: "block",
  },
  avatarProfile: {
    width: 150,
    height: 150,
    // backgroundColor: "red"
  },
  avatarImg: {
    width: 250,
    height: 250,
    marginTop: 145,
    marginLeft: 8,
  },

  containerLayout: {
    overflow: "hidden",
  },
  contentLayout: {
    flexGrow: 1,
    width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
    marginTop: theme.spacing(8),
  },
  contentShift: {
    marginTop: theme.spacing(8),
    width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  //Header
  appBar: {
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  headerMenuButtonSandwich: {
    marginLeft: 9,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    padding: theme.spacing(0.5),
  },
  headerMenuButtonCollapse: {
    marginRight: theme.spacing(2),
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)",
  },
  headerIconCollapse: {
    color: "white",
  },
  logotype: {
    color: "#fff",
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
  headerMenu: {
    marginTop: theme.spacing(7),
  },
  profileMenu: {
    minWidth: 265,
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.background.default,
    },
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  // SideBar
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginTop: theme.spacing(8),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(3) + 40,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    },
    // marginTop: theme.spacing(8),
  },
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: 18,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  containerProfile: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.only("xs")]: {
      marginTop: 0,
    },
    height: theme.spacing(30),
    padding: 10, //25
    backgroundImage: `url(${UserBG})`,
    backgroundSize: "cover",
    position: "relative",
    "&::before": {
      content: '""',
      // background: 'rgba(68, 138, 255, 0.5)',
      background: theme.palette.primary.main,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
    },
  },
  contentProfile: {
    marginTop: theme.spacing(2),
  },
  sidebarList: {
    overflow: "hidden",
    width: 240,
  },
  textProfile: {
    color: "white",
    fontSize: theme.spacing(2),
  },
  //MenuBar
  link: {
    textDecoration: "none",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background,
    },
  },
  linkActive: {
    backgroundColor: theme.palette.background.default,
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center",
  },
  linkIconActive: {
    color: theme.palette.primary.dark,
  },
  linkText: {
    padding: 0,
    color: theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,
  },
  linkTextActive: {
    color: theme.palette.text.primary,
  },
  linkTextHidden: {
    opacity: 0,
  },
  rootPage: {
    padding: "20px 20px 20px 20px",
  },
  paperModal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
