"use client";
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import SearchBox from "@/app/components/searchbox";
import { useState } from "react";

const StudentProfileManagemet: NextPage = () => {
  const headCells: any = [
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
  const rows: any = [
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
  const actionData = [
    {
      name: "details",
      type: "button",
      icon: "",
      path: "/details",
      params: "name",
      designation: "student",
    },
    { name: "toggle", type: "toggle", icon: "", path: "", params: "" },
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
  const rowsPerPageOptions: any = [5, 10, 25];

  //Searchbox
  //console.log(rows,"Row data student")
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredRows = rows.filter((row: any) => {
      return row.name.toLowerCase().includes(query.toLowerCase());
    });
    // You can perform search-related operations here using the query.
    // For example, you can make an API call with the search query.
    console.log(filteredRows, "Search result");
  };

  return (
    <Box>
      <Typography
        sx={{ flex: "1 1 100%", fontSize: "2.5rem" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Student List Who are Registered With Spaceship Languages
      </Typography>

{/* searchbox */}
      <Box>
        <Typography>Search Student</Typography>
        <SearchBox onSearch={handleSearch} />
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
