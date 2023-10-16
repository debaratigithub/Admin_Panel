'use client'
import React from "react";
import Link from "next/link";
import Sidenav from "../components/sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/navbar";



interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <>
      {/* <Navbar/> */}
     
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box>{props.children}</Box>

      </Box>
    </>
  );
};

export default DashboardLayout;
