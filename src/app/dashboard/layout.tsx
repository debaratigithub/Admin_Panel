
import React from "react";
import Link from "next/link";
import MiniDrawer from "../components/sidebar";
import Box from "@mui/material/Box";




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

        <Box sx={{flex: 1}}>{props.children}</Box>

      </Box>
    </>
  );
};

export default DashboardLayout;
