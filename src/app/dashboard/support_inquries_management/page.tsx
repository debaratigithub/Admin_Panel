'use client'
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import { RootState} from '../../../reduxts/store'
import {useAppDispatch, useAppSelector} from '../../../reduxts/hooks'
import {fetchAllSimData} from '../../../reduxts/Slices/simSlice/getallsim'

const SupportInquiresManagement: NextPage = () => {
  //Ading Interface and decareling types for table header

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch the fetchSomeDataAsync action when the component mounts
    dispatch(fetchAllSimData());
   
  }, [dispatch]);

  const apiuserdata = useAppSelector((state: RootState) =>state.all_simData.data);
  console.log(apiuserdata,"+++++SIM DATA GET++++++")

  interface HeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }

  const headCells: HeadCell[] = [
    {
      id: "date",
      numeric: false,
      disablePadding: true,
      label: "Date of Enquries",
    },
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Name of Student/Teacher",
    },
    {
      id: "designation",
      numeric: false,
      disablePadding: false,
      label: "Designation",
    },
    {
      id: "email",
      numeric: true,
      disablePadding: false,
      label: "Email Address",
    },

    {
      id: "message",
      numeric: true,
      disablePadding: false,
      label: "Enquires message",
    },
  ];

  //Ading Interface and decareling types for table rows
  interface Row {
    date: string;
    name: string;
    designation: string;
    email: string;
    message: string;
  }
  const rows: Row[] = [
    {
      date: "10/09/2023",
      name: "Riya Saha",
      designation: "Student",
      email: "riyya@gmail.com",
      message: "Will French course valid for one year?",
    },
    {
      date: "11/09/2023",
      name: "Srinath Laha",
      designation: "Teacher",
      email: "srinath@gmail.com",
      message: "What is the amount of frist payment?",
    },
  ];
  const actionData = [
    {
      name: "reply",
      type: "button",
      icon: "",
      path: "/reply",
      params: "name",
      designation: "simreply",
    },
    // { name: "toggle", type: "toggle", icon: "", path: "", params: "" },
  ];
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: number[] = [5, 10, 25];
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* <Typography
       sx={{ flex: "1 1 100%" ,fontSize: "3.5rem" }}
       variant="h6"
       id="tableTitle"
       component="div"
      > */}
      <Typography
        sx={{ flex: "1 1 100%", fontSize: "1.5rem" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Support Inquiries Management
      </Typography>
      {/* <CustomizedTables/> */}
      {/* table */}
      <Box>
        <CustomizedTables
          actionData={actionData}
          headCells={headCells}
          rows={rows}
          rowsPerPageOptions={rowsPerPageOptions}
          updateEndPoint={"/update"}
        />
      </Box>
    </Box>
  );
};

export default SupportInquiresManagement;
