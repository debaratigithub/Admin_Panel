"use client"

import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import VideoPlayer from "@/app/components/videoplayer/videoplayer";
import Box from "@mui/material/Box";


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState} from "react";

interface TeacherDetails {
  name: string;
  email: string;
  phone: number;
  status: string;
}

interface RouteParams {
  params: {
    teacherdetails: string; // It's a string because it's URL-encoded JSON
  };
  searchParams: {};
}

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const Teacherdetails: NextPage<RouteParams> = ({ params }) => {
  const TeacherData: TeacherDetails = JSON.parse(
    decodeURIComponent(params.teacherdetails)
  );

//import Iframedemo from "@/app/components/iframe/page";
// const Teacherdetails: NextPage = (params: any) => {
//   const TeacherData: any = JSON.parse(
//     decodeURIComponent(params.params.teacherdetails)
//   );
  // console.log(TeacherData.phone
  //   ,"++++++++++++")
  const videoUrl = 'https://www.youtube.com/watch?v=aL6MTL5_Tdc';


  const tpcard1 = () => ({
    h5: {
      fontSize: '23px',
      color: '#333',
      fontWeight: '600',
    },
    "& p": {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#333',
      marginBottom: '15px',
      border: '1px solid #ccc',
      flex: 1,
      padding: '5px 15px',
      background: '#eee',
    },
    "& span": {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#333',
      marginBottom: '15px',
      display: 'block',
    }

  })

  const tpcard2 = () => ({
    h5: {
      fontSize: '20px',
      color: '#333',
    },
    "& p": {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#333',
      paddingBottom: '5px',
    },
    "& span": {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#333',
      paddingBottom: '5px',
    },
    "& iframe": {
        border: '2px solid #ccc',
        marginBottom: '20px',
        height: '450px',
    }

  })

  const tpcard3 = () => ({
    h5: {
      fontSize: '20px',
      color: '#333',
    },
    "& p": {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#333',
      paddingBottom: '5px',
    }

  })

  const activetab  = () => ({
    button: {
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'none',
      borderRadius: '5px 5px 0 0',
    },
    "button.Mui-selected": {
      // background: '#2599FB',
      background: '#eee',
      color: '#2599FB',      
    }
  })


  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, background: '#eee' }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };




  // const [value, setValue] = useState(0);

  // const handleChange = (event:any, newValue:any) => {
  //   setValue(newValue);
  // };
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

    //   const handleButtonClick = () => {
    //     setOpen(true);
    //   };
    
      const handleClose = () => {
        setOpen(false);
      };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        oldpassword: data.get('oldpassword'),
      newpassword: data.get('newpassword'),
    });
    setOpen(true);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>



<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={activetab}>
          <Tab label="Personal Profile" />
          <Tab label="Teaching Profile" />
          <Tab label="Bank Details" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
      <Card
            sx={{
              // maxWidth: 345,
              color: "black",
              height: '100%',
            }}
          >
            <CardContent sx={tpcard1}>
              
            <Box display={"flex"} sx={{alignItems: 'center', marginBottom: '20px', background: '#eee', padding: '15px',}}>
              <Typography sx={{width: '130px', textAlign: 'center'}} component="div" >
                <Image
                src="/dp.avif"
                alt="Vercel Logo"
                //className="dark:invert"
                width={100}
                height={100}
                priority
              /></Typography>
              <Typography sx={{ alignItems: 'center', width: '230px', flex: '1' }} component="h5">Personal Profile of {TeacherData.name}</Typography>

            </Box>




            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Name:</Typography>
              <Typography>{TeacherData.name}</Typography>
            </Typography>


            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Email Address:</Typography>
              <Typography>{TeacherData.email}</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Phone Number:</Typography>
              <Typography>{TeacherData.phone}</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Status:</Typography>
              <Typography>{TeacherData.status}</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Country:</Typography>
              <Typography>India</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">State:</Typography>
              <Typography>West Bengal</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">City:</Typography>
              <Typography>Kolkata</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Date Of Birth:</Typography>
              <Typography>10/11/2023</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Gender:</Typography>
              <Typography>None</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Country:</Typography>
              <Typography>India</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Teaching Language:</Typography>
              <Typography>French</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Proficiency Level:</Typography>
              <Typography>Intermediate</Typography>
            </Typography>
              
            </CardContent>
          </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Card
            sx={{
              // maxWidth: 345,
              color: "white",
              height: '100%',
            }}
          >
            <CardContent sx={tpcard2}>
            <Box display={"flex"} sx={{alignItems: 'center', marginBottom: '20px', background: '#eee', padding: '15px',}}>
              <Typography gutterBottom variant="h5" component="h5">
                Teaching Profile of {TeacherData.name}
              </Typography>
              </Box>
              <Typography variant="h5" component="p"> Video Introduction:</Typography>
              <VideoPlayer url={videoUrl} />
              {/* <Iframedemo videoUrl={videoUrl}/> */}

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">About Me:</Typography>
              <Typography>Hi I am {TeacherData.name} teaches French Language.</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Lessons & Teaching Style:</Typography>
              <Typography>Text here</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Teaching Material:</Typography>
              <Typography>Text here</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Educational Details:</Typography>
              <Typography>Masters</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Work Experience:</Typography>
              <Typography>2 Years</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Certificates:</Typography>
              <Typography>Demo Text</Typography>
            </Typography>

            <Typography variant="h5" component="div" display={"flex"}>
              <Typography sx={{ alignItems: 'center', width: '230px', }} component="span">Status:</Typography>
              <Typography>{TeacherData.status}</Typography>
            </Typography>

              
            </CardContent>
          </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Card
            sx={{
              // maxWidth: 345,
              color: "black",
              height: '100%',
            }}
          >
            <CardContent sx={tpcard3}>
            <Box display={"flex"} sx={{alignItems: 'center', marginBottom: '20px', background: '#eee', padding: '15px',}}>
              <Typography gutterBottom variant="h5" component="h5">
                Bank Details {TeacherData.name}
              </Typography>
              </Box>
              <Typography variant="h5" component="p">Bank Name: State Bank Of India</Typography>
              <Typography variant="h5" component="p"> Routing Number: 123</Typography>
              <Typography variant="h5" component="p"> Account Number: SBI123ddffg444</Typography>
              <Typography variant="h5" component="p"> Account Holder Name: {TeacherData.name}</Typography>
              <Typography variant="h5" component="p"> Country: India</Typography>
              <Typography variant="h5" component="p"> State: West Bengal</Typography>
              <Typography variant="h5" component="p"> City: Kolkata</Typography>
              <Typography variant="h5" component="p"> Address: Saltlake Sector 5</Typography>
            </CardContent>
          </Card>
      </CustomTabPanel>

      {/* personal details */}



      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          
        </Grid>
        <Grid item xs={12} md={4}>
          
        </Grid>
        <Grid item xs={12} md={4}>
          
        </Grid>
      </Grid> */}






      {/* teaching details */}


      {/* bank details */}

    </Box>
  );
};

export default Teacherdetails;
