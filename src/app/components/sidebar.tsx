"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import Logo from "../../../public/images/footerlogo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useRouter } from "next/navigation";

// ICONS
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import NotificationImportantRoundedIcon from "@mui/icons-material/NotificationImportantRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const routeComponents: {
  name: string;
  pathname: string;
}[] = [
  { name: "Dashboard", pathname: "/dashboard" },
  { name: "Admin Management", pathname: "/dashboard/admin_profile_management" },
  {
    name: "Teacher Management",
    pathname: "/dashboard/teacher_profile_management",
  },
  {
    name: "Student Management",
    pathname: "/dashboard/student_profile_management",
  },
  { name: "Booking Management", pathname: "/dashboard/booking_management" },
  { name: "Notification Panel", pathname: "/dashboard/notification_panel" },
  { name: "CMS Panel", pathname: "/dashboard/content_management_system" },
  { name: "Blog Module", pathname: "/dashboard/blog_module_management" },
  {
    name: "Teacher Payout Module",
    pathname: "/dashboard/teacher_payout_module",
  },
  { name: "Transaction History", pathname: "/dashboard/transaction_history" },
  { name: "Revenue History", pathname: "/dashboard/revenue_history" },
  { name: "SIM Panel", pathname: "/dashboard/support_inquries_management" },
  { name: "LDM Panel", pathname: "/dashboard/lesson_disputes_management" },
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [cmsOpen, setCmsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("dashboard");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleCMS = () => {
    setCmsOpen(!cmsOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const adminstyle = () => ({
    backgroundColor: "#333333",
    li: {
      display: "block",
      color: "#fff",
      span: {
        fontSize: "14px",
      },
      svg: {
        color: "#fff",
      },
    },
    "&:hover": {
      //  backgroundColor: 'rgba(0,0,0,0.5)',
    },
  });

  const lefthover = () => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    position: "relative",
    zIndex: "0",
    // margin: '0 5px 0 0',
    mr: 1,
    mt: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      zIndex: "-1",
      left: "0",
      top: "0",
      width: "0",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: "0 50px 50px 0",
    },
    "&:hover::before": {
      width: "100%",
      transition: "width 0.2s",
    },
  });

  const leftSelected = () => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,

    mr: 1,
    mt: 1,
    backgroundColor: "#1B1212",
    borderRadius: "0 50px 50px 0",
    zIndex: "0",
    // margin: '0 5px 0 0',
    "&::before": {
      content: '""',
      position: "absolute",
      zIndex: "-1",
      left: "0",
      top: "0",
      width: "0",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: "0 50px 50px 0",
      margin: "0 5px 0 0",
    },
    "&:hover::before": {
      width: "100%",
      transition: "width 0.2s",
      margin: "0 5px 0 0",
    },
  });

  const router = useRouter();
  const handleButtonClick = () => {
    setSnackOpen(true);
  };
  const handleClose = () => {
    router.push("/");
    setSnackOpen(false);
  };
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const mobileMenuId = "primary-search-account-menu-mobile";
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#F9D136" }}
          open={open}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {!open && (
                <Image src={Logo} alt="Logo" width={120} height={40} priority />
              )}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleButtonClick}
                >
                  Logout
                </Button>
                <Snackbar
                  open={snackOpen}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Logout Successfully
                  </Alert>
                </Snackbar>
              </Stack>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          overflowY: "auto",
          "*::-webkit-scrollbar": {
            width: "8px",
          },
          "*::-webkit-scrollbar-track": {
            background: "#E4EFEF",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.75) ",
            borderRadius: "2px",
          },
        }}
      >
        <DrawerHeader sx={{ backgroundColor: "#727272" }}>
          <Typography
            sx={{ textAlign: "center", paddingRight: 3, color: "#FFDB58" }}
          >
            {/* <Box sx={{ml:3}}> */}
            <Image src={Logo} alt="Logo" width={120} height={40} priority />
            {/* </Box> */}
          </Typography>
          <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* {routeComponents &&
          routeComponents.length > 0 &&
          routeComponents.map((path, pathIndex) => (
              <List key={`path-${pathIndex}-${path.name}`} sx={adminstyle}>
                <Link href={path.pathname}>
                  <ListItem disablePadding >
                    <ListItemButton
                      sx={lefthover}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          marginRight: '8px',
                        }}
                      >
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={path.name}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
          ))} */}

        <List
          // sx={{backgroundColor:"#4E4E4E",
          //           backgroundImage: `url('https://e0.pxfuel.com/wallpapers/996/504/desktop-wallpaper-astronaut-wave-painting-in-2019-space-iphone-cartoon-astronaut.jpg')`,
          //             backgroundSize: 'cover',
          //             backgroundRepeat: 'no-repeat',
          //             height: '100%',
          //             padding: '10px',

          //     zIndex: "1",
          //     width: "100%",
          //     display: "block",
          //     top: "0",
          //     left: "0",
          //     backgroundPosition: "center center",
          //     "&:after": {

          //       zIndex: "3",
          //       width: "100%",
          //       height: "100%",

          //       display: "block",

          //       opacity: ".8",
          //     },
          //             }}
          sx={adminstyle}
        >
          {/* <Link href={"/dashboard"}> */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("dashboard"), router.push("/dashboard");
              }}
              sx={selected === "dashboard" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  // marginRight: '8px',
                  color: "#FFAA33",
                }}
              >
                <DashboardCustomizeTwoToneIcon
                  style={{
                    color: selected === "dashboard" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "dashboard" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}
          {/* <Link href={"/dashboard/admin_profile_management"}>     */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("profile"),
                  router.push("/dashboard/admin_profile_management");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "profile" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <AdminPanelSettingsRoundedIcon
                  style={{
                    color: selected === "profile" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Admin Management"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "profile" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/teacher_profile_management"}> */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("teacher"),
                  router.push("/dashboard/teacher_profile_management");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "teacher" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <GroupAddRoundedIcon
                  style={{
                    color: selected === "teacher" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Teacher Management"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "teacher" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/student_profile_management"}>           */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("student"),
                  router.push("/dashboard/student_profile_management");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "student" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <SupervisedUserCircleRoundedIcon
                  style={{
                    color: selected === "student" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Student Management"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "student" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/booking_management"}>           */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("booking"),
                  router.push("/dashboard/booking_management");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "booking" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <GroupWorkRoundedIcon
                  style={{
                    color: selected === "booking" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Booking Management"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "booking" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/notification_panel"}>   */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("notification"),
                  router.push("/dashboard/notification_panel");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "notification" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <NotificationImportantRoundedIcon
                  style={{
                    color: selected === "notification" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Notification Panel"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "notification" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/content_management_system"}>   */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("cms"),
                  router.push("/dashboard/content_management_system");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "cms" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <SecurityRoundedIcon
                  style={{ color: selected === "cms" ? "#A95C68" : "#EBC194" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"CMS Panel"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "cms" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/blog_module_management"}>   */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("blog"),
                  router.push("/dashboard/blog_module_management");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "blog" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <TextSnippetRoundedIcon
                  style={{ color: selected === "blog" ? "#A95C68" : "#EBC194" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Blog Module"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "blog" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/transaction_history"}>   */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("transaction"),
                  router.push("/dashboard/transaction_history");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "transaction" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <ReceiptLongRoundedIcon
                  style={{
                    color: selected === "transaction" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Transaction History"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "transaction" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/revenue_history"}>   */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("revenue"),
                  router.push("/dashboard/revenue_history");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "revenue" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <PaymentsRoundedIcon
                  style={{
                    color: selected === "revenue" ? "#A95C68" : "#EBC194",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Revenue History"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "revenue" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/support_inquries_management"}>   */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("sim"),
                  router.push("/dashboard/support_inquries_management");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "sim" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <SupportAgentRoundedIcon
                  style={{ color: selected === "sim" ? "#A95C68" : "#EBC194" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"SIM Panel"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "sim" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href={"/dashboard/lesson_disputes_management"}>   */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                setSelected("ldm"),
                  router.push("/dashboard/lesson_disputes_management");
              }}
              // sx={{
              //   minHeight: 48,
              //   justifyContent: open ? "initial" : "center",
              //   px: 2.5,

              //     '&:hover': {
              //       backgroundColor: 'rgba(0,0,0,0.5)',
              //       borderRadius:30 // Change the background color on hover
              //     },
              // }}
              sx={selected === "ldm" ? leftSelected : lefthover}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFAA33",
                }}
              >
                <WarningRoundedIcon
                  style={{ color: selected === "ldm" ? "#A95C68" : "#EBC194" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"LDM Panel"}
                sx={{
                  opacity: open ? 1 : 0,
                  color: selected === "ldm" ? "#b35261" : "#F5CDA1",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* </Link> */}
          {/* <ListItemButton onClick={toggleCMS} sx={{backgroundcolor:"#000"}}>
            <ListItemIcon>
              <ChromeReaderModeIcon
                sx={{
                  color: (theme) => (cmsOpen ? theme.palette.success.main : theme.palette.primary.main),
                  transition: 'color 0.3s ease-in-out',
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="CMS"
              sx={{
                color: (theme) => (cmsOpen ? theme.palette.success.main : '#8B8000'),
                transition: 'color 0.3s ease-in-out',
              }}
            />
            {cmsOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
          </ListItemButton>
          {cmsOpen && (
            <List sx={{ backgroundColor:"#ddd" }}>
              <ListItemButton>
                <ListItemText inset primary="Terms & Conditions" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText inset primary="Privacy Policy" />
              </ListItemButton>
            </List>
              )} */}
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
}
