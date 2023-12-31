'use client'
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
//Redux Toolkit
import { RootState} from '../../../reduxts/store'
import {useAppDispatch, useAppSelector} from '../../../reduxts/hooks'
import {fetchallCmsdata} from '../../../reduxts/Slices/cmsslice/getallcms'

const commonButton  = () => ({
  margin: '2px 0',
  padding: '5px 15px',
  backgroundColor: '#722F37!important',
  color: '#fff',
  border: 'none',
  fontSize: '16px',
  textTransform: 'capitalize',
  "&:hover": {
    backgroundColor: '#51414F!important',
    border: 'none',
  }
})

const ContentManagementSystem: NextPage = () => {
  const router = useRouter();
  // const [convertedCms, setConvertedCms] = useState<CmsItem[]>([]);
  const dispatch = useAppDispatch();
  interface CmsItem {
    _id: string;
    name: string;
    content: string;
    title: string;
    updated_at: string;
    id: string;
    contentname: string;
    contentdetails: string;
  }
  const stripHtmlTags = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc?.body?.textContent || "";
  };

  useEffect(() => {
    // Dispatch the fetchSomeDataAsync action when the component mounts
    dispatch(fetchallCmsdata());
   
  }, [dispatch]);

  let data = useAppSelector((state: RootState) =>state.all_cmsdata.data);
  console.log(data?.allCms,"+++++CMS++++++")
  

    let convertedArray = data?.allCms?.map((cmsItem: CmsItem) => {
          return {
            contentdetails: stripHtmlTags(cmsItem.content),
            contentname: cmsItem.title,
            _id : cmsItem._id,
            id : cmsItem.id
          }
        })
    

      const [convertedCms, setConvertedCms] = useState<CmsItem[]>(convertedArray);

   //Ading Interface and decareling types for table header
   interface HeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }
  const headCells: HeadCell[] = [
    {
      id: "contentname",
      numeric: false,
      disablePadding: true,
      label: "Content Name",
    },
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "",
    },
    {
      id: "contentdetails",
      numeric: false,
      disablePadding: false,
      label: "Content Details",
    },
  ];
   //Ading Interface and decareling types for table rows
   interface Row {
    contentname: string;
    contentdetails: string;
    _id: string;
    name: string;
   
    updated_at: string;
    id: string;
  }
  // const rows: Row[] = [
  //   {
  //     contentname: "About us",
  //     contentdetails:
  //       "An About Us page isn't just where you share the story of your brand. It's also where you tell your customer what you do for them and how you work to meet their needs in that area. It isn't so much “Here's what we're about,” but more like “Here's who we are, why we started, and what we can do for you.",
  //   },
  //   {
  //     contentname: "Terms & Conditions",
  //     contentdetails:
  //       "Terms and Conditions” is the document governing the contractual relationship between the provider of a service and its user. On the web, this document is often also called “Terms of Service” (ToS), “Terms of Use”, EULA (“End-User License Agreement”), “General Conditions” or “Legal Notes”",
  //   },
  //   {
  //     contentname: "Privacy Policy",
  //     contentdetails:
  //       "A privacy policy is a statement or a legal document (in privacy law) that discloses information about how a party gathers, uses, discloses, and manages a customer or client's data. It adheres to a legal requirement to protect a customer's or client's privacy.",
  //   },
  //   {
  //     contentname: "Testimonials",
  //     contentdetails:
  //       "A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement statistics.",
  //   },
  // ];

  const rows: Row[] =  convertedArray
  // const rows: Row[] = data?.allCms
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
      name: "edit",
      type: "button",
      icon: "",
      path: "/edit",
      params: "name",
      designation: "editcms",
    }
 
  ];
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: number[] = [5, 10, 25];
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography
        sx={{ flex: "1 1 100%",fontSize: "1.5rem", fontWeight: '600', marginBottom: '10px' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Content Management System
      </Typography>

      <Button
            // variant=""
            sx={commonButton}
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
