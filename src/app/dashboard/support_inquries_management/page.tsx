// import type { NextPage } from "next";

// const SupportInquiresManagement : NextPage =()=>{
//     return <div>
//         <h1 className="text-4xl font-bold">SupportInquiresManagement is coming soon</h1>
//         </div>
// }

// export default SupportInquiresManagement

import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";

const SupportInquiresManagement : NextPage =()=>{
  const headCells: any = [
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
  const rows: any = [
    {
      date:"10/09/2023",
      name: "Riya Saha",
      designation:"Student",
      email: "riyya@gmail.com",
      message:"Will French course valid for one year?"
    },
    {
        date:"11/09/2023",
        name: "Srinath Laha",
        designation:"Teacher",
        email: "srinath@gmail.com",
        message:"What is the amount of frist payment?"
      },
   
  ];
      const actionData = [
        { name: "reply", type:"button", icon: "", path: "/reply", params: "name",designation: "simreply", },
        // { name: "toggle", type: "toggle", icon: "", path: "", params: "" },
      ];
      // const statusData = [{1:'Active', 0:'In-Active'}]
      const rowsPerPageOptions: any = [5, 10, 25];
    return <Box>
         <Typography
       sx={{ flex: "1 1 100%" ,fontSize: "3.5rem" }}
       variant="h6"
       id="tableTitle"
       component="div"
      >
        Support Inquiries Management
      </Typography>
        {/* <CustomizedTables/> */}
         {/* table */}
         <CustomizedTables
              actionData={actionData}
              headCells={headCells}
              rows={rows}
              rowsPerPageOptions={rowsPerPageOptions}
              updateEndPoint={'/update'}
            />
        </Box>
}

export default SupportInquiresManagement