
import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
//import MiniDrawer from "../components/sidebar";
import Box from "@mui/material/Box";
import {Suspense } from 'react';
import Loading from "./loading";
const MiniDrawer = dynamic(() => import('../components/sidebar'), {
  ssr: true,
});



interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <>
      {/* <Navbar/> */}
     
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer/>
        <Suspense fallback={<Loading />}>
        <Box sx={{flex: 1}}>{props.children}</Box>
        </Suspense>
      </Box>
    </>
  );
};

export default DashboardLayout;
