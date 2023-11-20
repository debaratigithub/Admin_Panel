
"use client"

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
//import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import teacherImg from "../../../image/presentation.png";
import { CloudUpload } from '@mui/icons-material';
//import { useDropzone } from 'react-dropzone';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import PersonPinIcon from '@mui/icons-material/PersonPin';

import profileImg from '../../../image/profile.jpg'
import Divider from '@mui/material/Divider';
import { useState } from "react";
import Changepassword from "./changepassword/page";


//Redux Toolkit
import { useAppDispatch, useAppSelector } from "../../../reduxts/hooks";
import { changePasswordData } from "../../../reduxts/Slices/authslice/changepasswordslice";

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

interface FormData {
  password: string;
  newPassword: string;
  confirmPassword: string;
}


const AdminprofileManagemet: NextPage = () => {
  const router = useRouter();
  
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [uploadedImage, setUploadedImage] = React.useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };



  const formbase = () => ({
    input: {
      background: '#fff',
      boxShadow: '0 0 5px #ccc',
      height: '35px',
      padding: '5px 15px',
      border: '1px solid #ccc',
      fontSize: '13px',
      borderRadius: '5px',
    }
  })

  const commonbutton = () => ({
    borderRadius: '5px',
    backgroundColor: '#D91962!important',
    color: '#fff',
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: '500',
    border: 'none!important',
    textTransform: 'none',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#000!important',
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
          <Box sx={{ p: 3, background: '#eee', mt:1 }}>
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



//with any type
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event:any, newValue:any) => {
  //   setValue(newValue);
  // };

   //without any type
   const [value, setValue] = useState<number>(0);

   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
     setValue(newValue);
   };


  const [open, setOpen] = React.useState(false);

    //   const handleButtonClick = () => {
    //     setOpen(true);
    //   };
    
      const handleClose = () => {
        setOpen(false);
      };


      //change passsword
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("clicked",formData);

    dispatch(changePasswordData(formData)).then((response: any) => {
      console.log(response.payload, "response from login component");

      if (response.payload.status == true) {

        console.log("routing is done");
       
        //router.push("/dashboard");
      } else {
        console.log("routing is not done");
      }
    });
    // const data = new FormData(event.currentTarget);
    // console.log({
    //     oldpassword: data.get('oldpassword'),
    //   newpassword: data.get('newpassword'),
    // });
    // setOpen(true);
  };

  const activetab  = () => ({
    button: {
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'none',
      borderRadius: '5px 5px 0 0',
      width:"50%",
      backgroundColor:"#E5E4E2",
      mr:2,
     
      borderBottom: '1px',
    },
    "button.Mui-selected": {
      // background: '#2599FB',
      // background: '#fff',
      // color: '#2599FB',  
      backgroundImage: 'linear-gradient(15deg, #E5E4E2 30%, #A9A9A9 90%)',
              color: '#0096FF',
              borderBottom: '-1px', // Negative margin to remove the bottom margin  
    },
 

  })


  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>


      <Box sx={{  borderColor: 'divider',  backgroundColor:"#D3D3D39" }}>
        <Tabs value={value} onChange={handleChange}  sx={activetab}>
          <Tab label="Admin Profile Details"    
            sx={{
              
            '&.Mui-selected': {
              borderBottom: '1px #fff !important',
            },
          }}/>
          <Tab label="Change Password" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        <React.Fragment>
          {/* <Typography variant="h4" gutterBottom>
            Admin Profile Details
          </Typography> */}
          <Box sx={{display:"flex", flexDirection:"row",}}>
            <Box sx={{ width:"400px", mr:2}}>
            <Card
              sx={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                border: "1px solid",
                borderColor: "#fff",
              }}
            >
              <CardContent>
              <Box
                 
                  sx={{
                    backgroundImage: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
                    // backgroundPosition: "100%",
                    height:"175px",
                    // position:"fixed",
                    // width:"100%"
                  }}
                  >
                  </Box> 
                <Box component="label" sx={{display:"flex", ml:6,  backgroundSize: "cover",
                    backgroundPosition: "50%",top:"100px",
                    overflow: "hidden", position:"absolute", border:"1px dashed #ccc",alignItems:"center", justifyContent:"center",height:"150px", width:"150px", borderRadius:"50%", backgroundColor:"#fff"}}>
                   {uploadedImage ? (
                   <Image src={uploadedImage} alt="Uploaded" 
                   fill={true} style={{  borderRadius: '50%', objectFit:"cover" }} />
                   ) : (
                    <Image src={profileImg} fill={true} alt="Uploaded"  style={{ borderRadius: '50%', objectFit:"cover" }} />
          
        )}
                    </Box>
 {/* <Box
       
        flexDirection="column"
        alignItems="center"
        
        // height={"50px"}
        // width={"50px"}
        // p={3}
        
        border="1px dashed #ccc"
        borderRadius={50}
        component="label" // Make the whole box clickable
        sx={{mt:15}}
      >
        
      </Box> */}

      <Box 
      flexDirection="column"
       sx={{marginTop:9, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}  component="label" >
      <input
          type="file"
          accept="image/*" // Specify accepted file types
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        {/* {uploadedImage ? (
          <img src={uploadedImage} alt="Uploaded" style={{ width: '100%', borderRadius: '50%' }} />
        ) : ( */}
          <CloudUpload fontSize="large" />
        {/* )} */}
        <Typography  align="center" mt={1} ml={1}>
        Click to upload an image
      </Typography>
      </Box>
    
      <Divider sx={{mt:1}} />
      <Typography  variant={"h6"} mt={1} align="center" sx={{color:"#2196F3"}}>
        Admin
      </Typography>
      <Typography  mt={1} sx={{color:"#aaa"}} align="center">
        Debarati Patwari
      </Typography>
    
              </CardContent>
            </Card>
            
          </Box>
    

          <Grid container spacing={2} sx={formbase} >
        
          
            <Grid item xs={12} md={6} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value="Debarati"
              />
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                value="Patwari"
              />
            </Grid>
            <Grid item xs={12}  md={12} sm={6}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                value="Webel Bhaban ,Sakti Tower"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                value="Saltlake Sector 5"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                value="Saltlake Sector 5"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
                value="West Bengal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
                value="713098"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
                value="India"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> */}
              <Button
                variant="outlined"
                // endIcon={<SettingsIcon />}
                onClick={() => {
                  // router.push("/dashboard/admin_profile_management/changepassword");
                  console.log("clicked");
                }}
                sx={commonbutton}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          </Box>
        </React.Fragment>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >




{/* <Changepassword/> */}

      <Card sx={{width: '450px', margin: '0 auto', border: '1px solid #E5E4E2'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ChangeCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, px:4 }}>
          
             <TextField
              margin="normal"
              required
              fullWidth
              name="oldpassword"
              label="Old Password"
              type="password"
              id="oldpassword"
              autoComplete="old-password"
              value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newpassword"
              label="New Password"
              type="password"
              id="newpassword"
              autoComplete="new-password"
              value={formData.newPassword}
                onChange={(e) =>
                  setFormData({ ...formData, newPassword: e.target.value })
                }
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="conpassword"
              label="Confirm Password"
              type="password"
              id="conpassword"
              autoComplete="con-password"
              value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
            />
           
           <Stack spacing={2} sx={{mt:5}}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              // sx={{ mt: 3, mb: 2 }}
              sx={commonbutton}
            >
              Submit
            </Button>
            {open && (
        <Alert severity="success" onClose={handleClose}>
          <AlertTitle><strong>Password Change Successfully!</strong></AlertTitle>
        </Alert>
      )}
            </Stack>
           
          </Box> 

          
        </Box>
        </Card>
       
      </CustomTabPanel>



    </Box>
  );
}
export default AdminprofileManagemet