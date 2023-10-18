"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
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
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AccountCircle from '@mui/icons-material/AccountCircle';
import Image from 'next/image';
import Logo from '../../../public/images/footerlogo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useRouter } from "next/navigation";

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
  { name: "Teacher Payout Module", pathname: "/dashboard/teacher_payout_module" },
  { name: "Transaction History", pathname: "/dashboard/transaction_history" },
  { name: "Revenue History", pathname: "/dashboard/revenue_history" },
  { name: "SIM Panel", pathname: "/dashboard/support_inquries_management" },
  { name: "LDM Panel", pathname: "/dashboard/lesson_disputes_management" }

];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
  React.useState<null | HTMLElement>(null);
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
        //  backgroundColor: 'rgba(0,0,0,0.5)',
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
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: '0 50px 50px 0',
    },
    "&:hover::before": {
      width: '100%',
      transition: 'width 0.2s',
    }
  })
  const router = useRouter();
  const handleButtonClick = () => {
   
    setSnackOpen(true);
  };
  const handleClose = () => {
    router.push("/");
    setSnackOpen(false);
  };
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#dbb627'}} open={open}>
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
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {/* <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={30}
              priority
            /> */}
           
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
            <Stack spacing={2} sx={{ width: '100%' }}>

           
              <Button
            variant="outlined"
            
            color="inherit"
            onClick={handleButtonClick}
          >
           Logout
          </Button>
         <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Logout Successfully
        </Alert>
      </Snackbar>
         
          </Stack>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
      <Drawer variant="permanent" open={open} sx={{ overflowY: 'auto', "*::-webkit-scrollbar": {
          width: "8px"
        },
        "*::-webkit-scrollbar-track": {
          background: "#E4EFEF"
        },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(0,0,0,0.5) ",
          borderRadius: "2px"
        } }}>
      <DrawerHeader sx={{backgroundColor:"#dbb627", }}>
          <Typography sx={{textAlign:"center", paddingRight:7, color:"#FFDB58"}}>
          <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={40}
              priority
            />
          </Typography>
          <IconButton onClick={() => setOpen(!open)} sx={{color:"#fff"}}>
          
              <ChevronRightIcon />
          
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