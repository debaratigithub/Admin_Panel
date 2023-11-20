
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
import { RootState} from '../../../reduxts/store'
import {useAppDispatch, useAppSelector} from '../../../reduxts/hooks'
import {fetchAllBlogData} from '../../../reduxts/Slices/blogSlice/getallblog'

const commonButton  = () => ({
  margin: '2px 0',
  padding: '5px 15px',
  backgroundColor: '#51414F!important',
  color: '#fff',
  border: 'none',
  fontSize: '16px',
  textTransform: 'capitalize',
  "&:hover": {
    backgroundColor: '#722F37!important',
    border: 'none',
  }
})

const BlogModuleManagement: NextPage = () => {
  const router = useRouter();
  
  interface BlogItem {
    _id: string;
    name: string;
    details: string;
    title: string;
    created_at: string;
    id: string;
    blogname: string;
    blogdetails: string;
  }
  const stripHtmlTags = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc?.body?.textContent || "";
  };

  //calling all student data through redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch the fetchSomeDataAsync action when the component mounts
    dispatch(fetchAllBlogData());
   
  }, [dispatch]);

  const apiuserdata = useAppSelector((state: RootState) =>state.all_blogData.data);
  console.log(apiuserdata?.allBlog,"++++++BBBLLLOGGG+++++")

  let convertedArray = apiuserdata?.allBlog?.map((Item: BlogItem) => {
    return {
      blogdetails: stripHtmlTags(Item.details),
      blogname: Item.title,
      _id : Item._id,
      id : Item.id
    }
  })

   //Ading Interface and decareling types for table header
   interface HeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
    hide: boolean
  }
  const headCells: HeadCell[] =  [
    {
      id: "blogname",
      numeric: false,
      disablePadding: true,
      label: "Blog Name",
      hide: false
    },
    {
        id: "id",
        numeric: false,
        disablePadding: false,
        label: "",
    hide: true
      },
    {
      id: "blogdetails",
      numeric: false,
      disablePadding: false,
      label: "Blog Details",
      hide: false
    },
  ];

   //Ading Interface and decareling types for table rows
   interface Row {
    blogname:string;
    blogdetails: string;
  //  id: string,
  }

  const handleEditClick = (id: string) => {
    // Log the ID to the console
    console.log("Clicked edit button for ID:", id);
  
    // Update the selectId prop in actionData
    const updatedActionData = actionData.map((item) =>
      item.name === "edit" ? { ...item, selectId: id } : item
    );
  
    // Update the state or Redux with the updatedActionData if needed
  
    // Redirect to the edit page with the ID as a parameter
    // router.push(`/dashboard/blog_module_management/edit/${id}`);
  };
  // const rows: Row[] = [
  //   {
  //       blogname: "Talk in French",
  //       //blogauthorname:"William Alexander",
  //       blogdetails:
  //       "Talk in French has put together a great series of blogs that dive into the language to source the most essential ingredients for speaking it fluently. Each post has a different lesson and all are well presented with easy-to-follow information and plenty of French with English translations."
  //   },
  //   {
  //       blogname: " RealLife English",
  //       //blogauthorname:"William Alexander",
  //       blogdetails:
  //       "RealLife English gives you full control over your learning with videos, podcasts and blogs. The blog section is extensive (covers a lot). It is also constantly updated with lessons and cultural insights (thoughtful opinions). The sentences are short and to the point, making them easy to follow."
  //   },
    
  // ];
  const rows: Row[] = convertedArray
   //For Action section

   interface ActionData {
    name: string;
    type: "button" | "toggle";
    icon: string;
    path: string;
    params: string;
    designation: string;
    // selectId: number;
    // onClick?: (id: string) => void;
    selectId?: string; // Add this line
  }
  const actionData : ActionData[] =  [
   
    {
      name: "edit",
      type: "button",
      icon: "",
      path: "/edit",
      params: "name",
      designation: "editblog",
      // selectId: id
      // onClick: (id: string) => handleEditClick(id),
      selectId: "" // Initialize with an empty string
    }
 
  ];
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: number[] = [5, 10, 25];
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography
        sx={{ flex: "1 1 100%", fontSize: "1.5rem", width: "800px", marginBottom: '10px' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Blog Module Management 
      </Typography>

      <Button
            // variant="outlined"
            sx={commonButton}
            endIcon={<AddIcon />}
            onClick={() => {
              router.push("/dashboard/blog_module_management/add");
              console.log("clicked");
            }}
          >
           Add New Blogs
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

export default BlogModuleManagement;
