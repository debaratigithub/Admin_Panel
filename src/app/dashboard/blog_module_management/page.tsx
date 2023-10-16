// import type { NextPage } from "next";

// const BlogModuleManagement : NextPage =()=>{
//     return <div>
//         <h1 className="text-4xl font-bold">BlogModuleManagement is coming soon</h1>
//         </div>
// }

// export default BlogModuleManagement

'use client'
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";

const BlogModuleManagement: NextPage = () => {
  const router = useRouter();
  const headCells: any = [
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
  const rows: any = [
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
  const actionData = [
   
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
  const rowsPerPageOptions: any = [5, 10, 25];
  return (
    <Box>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Blog Module Management 
      </Typography>

      <Button
            variant="outlined"
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
