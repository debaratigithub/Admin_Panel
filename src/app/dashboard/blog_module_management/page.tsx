
'use client'
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";

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
   //Ading Interface and decareling types for table header
   interface HeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }
  const headCells: HeadCell[] =  [
    {
      id: "blogname",
      numeric: false,
      disablePadding: true,
      label: "Blog Name",
    },
    // {
    //     id: "blogauthorname",
    //     numeric: false,
    //     disablePadding: false,
    //     label: "Author Name",
    //   },
    {
      id: "blogdetails",
      numeric: false,
      disablePadding: false,
      label: "Blog Details",
    },
  ];

   //Ading Interface and decareling types for table rows
   interface Row {
    blogname:string;
    blogdetails: string;
   
  }
  const rows: Row[] = [
    {
        blogname: "Talk in French",
        //blogauthorname:"William Alexander",
        blogdetails:
        "Talk in French has put together a great series of blogs that dive into the language to source the most essential ingredients for speaking it fluently. Each post has a different lesson and all are well presented with easy-to-follow information and plenty of French with English translations."
    },
    {
        blogname: " RealLife English",
        //blogauthorname:"William Alexander",
        blogdetails:
        "RealLife English gives you full control over your learning with videos, podcasts and blogs. The blog section is extensive (covers a lot). It is also constantly updated with lessons and cultural insights (thoughtful opinions). The sentences are short and to the point, making them easy to follow."
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
  const actionData : ActionData[] =  [
   
    {
      name: "edit",
      type: "button",
      icon: "",
      path: "/edit",
      params: "name",
      designation: "editblog",
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
