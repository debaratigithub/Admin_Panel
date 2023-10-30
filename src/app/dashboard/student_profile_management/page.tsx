"use client";
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import SearchBox from "@/app/components/searchbox";
import { useState } from "react";

const StudentProfileManagemet: NextPage = () => {
  //Ading Interface and decareling types for table header
  interface HeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }
  const headCells: HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Student Name",
    },
    {
      id: "email",
      numeric: false,
      disablePadding: false,
      label: "Email Address",
    },
    {
      id: "phone",
      numeric: true,
      disablePadding: false,
      label: "Phone Number",
    },

    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status Of Application",
    },
  ];

   //Ading Interface and decareling types for table rows
   interface Row {
    name: string;
    email: string;
    phone: number;
    status:string
  }
  const rows: Row[] =  [
    {
      name: "Riya Saha",
      email: "riyya@gmail.com",
      phone: 7875678987,
      status: "Active",
      //status:0
    },
    {
      name: "Rintu Sarkar",
      email: "rintu@gmail.com",
      phone: 6875678787,
      status: "In-Active",
      //status:1
    },
  ];

   //For Action section

   interface ActionData {
    name: string;
    type: "button" | "toggle";
    icon: string;
    path: string;
    params: string;
    designation: string;
  }
  const actionData : ActionData[] = [
    {
      name: "details",
      type: "button",
      icon: "",
      path: "/details",
      params: "name",
      designation: "student",
    },
    {
      name: "toggle",
      type: "toggle",
      icon: "",
      path: "",
      params: "",
      designation: "",
    },
    {
      name: "block",
      type: "button",
      icon: "",
      path: "/block",
      params: "name",
      designation:""
     
    },
  ];
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: number[] = [5, 10, 25];

  //Searchbox
  //console.log(rows,"Row data student")
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredRows = rows.filter((row: Row) => {
      return row.name.toLowerCase().includes(query.toLowerCase());
    });
    // You can perform search-related operations here using the query.
    // For example, you can make an API call with the search query.
    console.log(filteredRows, "Search result");
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
      <Typography
        sx={{ flex: "1 1 100%", fontSize: "1.5rem", fontWeight: '600' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Student List Who are Registered With Spaceship Languages
      </Typography>

{/* searchbox */}
      <Box>
        {/* <Typography>Search Student</Typography> */}
        <SearchBox onSearch={handleSearch} placeHolder="Search Students ..."/>
        {/* <Typography>Search Query: {searchQuery}</Typography> */}
      </Box>
      {/* <CustomizedTables/> */}
      {/* table */}
      <CustomizedTables
        actionData={actionData}
        headCells={headCells}
        rows={rows}
        rowsPerPageOptions={rowsPerPageOptions}
        updateEndPoint={"/update"}
      />
    </Box>
  );
};

export default StudentProfileManagemet;
