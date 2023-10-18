"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

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
  // necessary for content to be below app bar
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

//Declairing array of objects of sidebar components
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
  { name: "Teacher Payout Module", pathname: "/dashboard/teacher_payout_module" },
  { name: "Transaction History", pathname: "/dashboard/transaction_history" },
  { name: "Revenue History", pathname: "/dashboard/revenue_history" },
  { name: "SIM Panel", pathname: "/dashboard/support_inquries_management" },
  { name: "LDM Panel", pathname: "/dashboard/lesson_disputes_management" }

];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const adminstyle = () => ({
    backgroundColor: '#4F4F4F',
      li: {
        display: "block", 
        color: '#fff',
        span: {
          fontSize: '14px',
        },        
        svg: {
          color: '#fff',
        }
      },
      "&:hover": {
        // backgroundColor: '#2599FB',
      }

  })

  const lefthover  = () => ({
    minHeight: 40,
    justifyContent: open ? "initial" : "center",
    px: 2.5,    
    position: 'relative',
    zIndex: '0',
    margin: '0 5px 0 0',
    "&::before": {
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      left: '0',
      top: '0',
      width: '0',
      height: '100%',
      backgroundColor: '#2599FB',
      borderRadius: '0 50px 50px 0',
    },
    "&:hover::before": {
      width: '100%',
      transition: 'width 0.2s',
    }
  })

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          > */}

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {routeComponents &&
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
          ))}

        <Divider />
      </Drawer>
    </Box>
  );
}
