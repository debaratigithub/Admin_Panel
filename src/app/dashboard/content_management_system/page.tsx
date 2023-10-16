'use client'
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";

const ContentManagementSystem: NextPage = () => {
  const router = useRouter();
  const headCells: any = [
    {
      id: "contentname",
      numeric: false,
      disablePadding: true,
      label: "Content Name",
    },
    {
      id: "contentdetails",
      numeric: false,
      disablePadding: false,
      label: "Content Details",
    },
  ];
  const rows: any = [
    {
      contentname: "About us",
      contentdetails:
        "An About Us page isn't just where you share the story of your brand. It's also where you tell your customer what you do for them and how you work to meet their needs in that area. It isn't so much “Here's what we're about,” but more like “Here's who we are, why we started, and what we can do for you.",
    },
    {
      contentname: "Terms & Conditions",
      contentdetails:
        "Terms and Conditions” is the document governing the contractual relationship between the provider of a service and its user. On the web, this document is often also called “Terms of Service” (ToS), “Terms of Use”, EULA (“End-User License Agreement”), “General Conditions” or “Legal Notes”",
    },
    {
      contentname: "Privacy Policy",
      contentdetails:
        "A privacy policy is a statement or a legal document (in privacy law) that discloses information about how a party gathers, uses, discloses, and manages a customer or client's data. It adheres to a legal requirement to protect a customer's or client's privacy.",
    },
    {
      contentname: "Testimonials",
      contentdetails:
        "A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement statistics.",
    },
  ];
  const actionData = [
   
    {
      name: "edit",
      type: "button",
      icon: "",
      path: "/edit",
      params: "name",
      designation: "editcms",
    }
 
  ];
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: any = [5, 10, 25];
  return (
    <Box>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Content Management System
      </Typography>

      <Button
            variant="outlined"
            endIcon={<AddIcon />}
            onClick={() => {
              router.push("/dashboard/content_management_system/add");
              console.log("clicked");
            }}
          >
           Add New Content
          </Button>
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

export default ContentManagementSystem;
