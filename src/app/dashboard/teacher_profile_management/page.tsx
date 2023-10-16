'use client'
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import CustomizedTables from "@/app/components/table/Table";

import EnhancedTableToolbar from "@/app/components/table/EnhancedTableToolbar";
import Typography from "@mui/material/Typography";
import SearchBox from "@/app/components/searchbox";
import { useState } from "react";

const TeacherProfileManagemet: NextPage = () => {
  const headCells: any = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Teacher Name",
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
      name: "Debarati Patwari",
      email: "deba@gmail.com",
      phone: 7875678987,
      status: "Active",
    },
    {
      name: "Himadri Bar",
      email: "him@gmail.com",
      phone: 6875678787,
      status: "In-Active",
    },
    {
      name: "Srinath Laha",
      email: "srinath@gmail.com",
      phone: 3875678987,
      status: "Active",
    },
    {
      name: "Sohini Pal",
      email: "sohini@gmail.com",
      phone: 9875678987,
      status: "Active",
    },
    {
      name: "Arpita Ghosh",
      email: "arpita@gmail.com",
      phone: 3875678987,
      status: "In-Active",
    },
    {
      name: "Sapta Singha",
      email: "sapta@gmail.com",
      phone: 1875678987,
      status: "Active",
    },
  ];
  const actionData = [
    {
      name: "details",
      type: "button",
      icon: "",
      path: "/details",
      params: "name",
      designation:"teacher"
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

 

  const heading = "Teacher";
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: any = [5, 10, 25];

//Searchbox
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
      {/* <Searchbox/> */}

      {/* <CustomizedTables/> */}
      {/* table */}
      <Typography
        sx={{ flex: "1 1 100%" ,fontSize: "2.47rem"}}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Teachers List Who are Registered With Spaceship Languages
      </Typography>
      <Box>
        <Typography>Search Teacher</Typography>
        <SearchBox onSearch={handleSearch} />
        {/* <Typography>Search Query: {searchQuery}</Typography> */}
      </Box>
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

export default TeacherProfileManagemet;
