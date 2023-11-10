"use client";

import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import VideoPlayer from "@/app/components/videoplayer/videoplayer";
import Box from "@mui/material/Box";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

interface StudentDetails {
  name: string;
  email: string;
  phone: number;
  status: string;
}

interface RouteParams {
  params: {
    studentdetails: string; // It's a string because it's URL-encoded JSON
  };
  searchParams: {};
}

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

//import Iframedemo from "@/app/components/iframe/page";

//previouly done with any type
// const Studentdetails: NextPage = (params: any) => {
//   console.log(params,"paramsss print")
//   const StudentData: any = JSON.parse(
//     decodeURIComponent(params.params.studentdetails)
//   );

const Studentdetails: NextPage<RouteParams> = ({ params }) => {
  const StudentData: StudentDetails = JSON.parse(
    decodeURIComponent(params.studentdetails)
  );

  //console.log(StudentData, "___________");

  const tpcard1 = () => ({
    h5: {
      fontSize: "23px",
      color: "#333",
      fontWeight: "600",
    },
    "& p": {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#333",
      marginBottom: "15px",
      border: "1px solid #ccc",
      flex: 1,
      padding: "5px 15px",
      background: "#eee",
    },
    "& span": {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#333",
      marginBottom: "15px",
      display: "block",
    },
  });

  const tpcard2 = () => ({
    h5: {
      fontSize: "20px",
      color: "#333",
    },
    "& p": {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#333",
      paddingBottom: "5px",
    },
    "& span": {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#333",
      paddingBottom: "5px",
    },
    "& iframe": {
      border: "2px solid #ccc",
      marginBottom: "20px",
      height: "450px",
    },
  });

  const tpcard3 = () => ({
    h5: {
      fontSize: "20px",
      color: "#333",
    },
    "& p": {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#333",
      paddingBottom: "5px",
    },
  });

  const activetab = () => ({
    button: {
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "none",
      borderRadius: "5px 5px 0 0",
    },
    "button.Mui-selected": {
      // background: '#2599FB',
      background: "#eee",
      color: "#2599FB",
    },
  });

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, background: "#eee" }}>{children}</Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  //with any type
  // const [value, setValue] = useState(0);

  // const handleChange = (event: any, newValue: any) => {
  //   setValue(newValue);
  //};

  //without any type
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  //   const handleButtonClick = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      oldpassword: data.get("oldpassword"),
      newpassword: data.get("newpassword"),
    });
    setOpen(true);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={activetab}
        >
          <Tab label="Personal Profile" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Card
          sx={{
            // maxWidth: 345,
            color: "black",
            height: "100%",
          }}
        >
          <CardContent sx={tpcard1}>
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
                marginBottom: "20px",
                background: "#eee",
                padding: "15px",
              }}
            >
              <Typography
                sx={{ width: "130px", textAlign: "center" }}
                component="div"
              >
                <Image
                  src="/dp.avif"
                  alt="Vercel Logo"
                  //className="dark:invert"
                  width={100}
                  height={100}
                  priority
                />
              </Typography>
              <Typography
                sx={{ alignItems: "center", width: "230px", flex: "1" }}
                component="h5"
              >
                Personal Profile of {StudentData.name}
              </Typography>
            </Box>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                Name:
              </Typography>
              <Typography>{StudentData.name}</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                Email Address:
              </Typography>
              <Typography>{StudentData.email}</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                Phone Number:
              </Typography>
              <Typography>{StudentData.phone}</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                Status:
              </Typography>
              <Typography>{StudentData.status}</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                I Want To Learn:
              </Typography>
              <Typography>French</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                Proficiency Level:
              </Typography>
              <Typography>Intermediate</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                Goals:
              </Typography>
              <Typography>Living abroad</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography
                sx={{ alignItems: "center", width: "230px" }}
                component="span"
              >
                Regions:
              </Typography>
              <Typography>India</Typography>
            </Typography>
          </CardContent>
        </Card>
      </CustomTabPanel>
    </Box>
  );
};

export default Studentdetails;
