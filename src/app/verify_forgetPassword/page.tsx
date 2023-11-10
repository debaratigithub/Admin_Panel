"use client";
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Container,
  Stack,
  Card,
} from "@mui/material";
import Button, { buttonClasses } from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
//import logo from '../image/logo.png'

//Redux Toolkit
 import {useAppDispatch, useAppSelector} from '../../reduxts/hooks'
  import {verifyforgotPassword} from '../../reduxts/Slices/authslice/verify_forgotPassword'


interface FormData {
  email: string;
  role: string;
  otp: string;
}

const VerifyForgetPassword: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    email: 'debarati.patwari@brainiuminfotech.com',
    role: 'admin',
    otp: ''
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // router.push("/dashboard");
    console.log("clicked",formData);
    //dispatch(verifyforgotPassword(formData));
    //router.push("/resetPassword");

    dispatch(verifyforgotPassword(formData)).then((response: any) => {
      console.log(response.payload, "response from login component");

      if (response.payload.status == true) {
        console.log("routing is done");
        router.push("/resetPassword");
      } else {
        console.log("routing is not done");
      }
    });
    
  };

  const commonButton = () => ({
    margin: "10px 0",
    padding: "10px 20px",
    backgroundColor: "#D91962!important",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#edc627!important",
      border: "none",
    },
  });

  const forgot = () => ({
    fontWeight: "500",
    fontSize: "16px",
    color: "#333",
    span: {
      color: "#2599FB",
      fontWeight: "500",
      fontSize: "16px",
      paddingLeft: "10px",
      cursor: "pointer",
      textTransform: "capitalize",
      "&:hover": {
        color: "#D91962",
      },
    },
  });

  return (
    <Box
      sx={{
        "&:before": {
          content: '""',
          // background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: "0.3",
          background:
            "linear-gradient(135deg,  rgba(249,203,34,1) 0%,rgba(17,145,249,1) 100%)",
        },
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            elevation={9}
            sx={{ py: 3, px: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr={1}
              mt={2}
              mb={1}
            >
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                //className="dark:invert"
                width={200}
                height={200}
                priority
              />
            </Box>

            <Typography component="h2" variant="h5" mt={2}>
           Enter OTP
            </Typography>
            <Typography ml={1} mt={1} sx={{color:"#A9A9A9", fontSize:"14px"}}>
          Enter your email address with OTP and we’ll send a link to reset your password
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              style={{ width: "100%", marginTop: "10px", textAlign: "center" }}
            >
              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userId"
                label="User ID"
                name="userId"
                autoComplete="userId"
                color="warning"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}

              /> */}

               <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="otp"
                label="OTP"
                name="otp"
                autoComplete="otp"
                color="warning"
                type="number"
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}

              />
              
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={commonButton}
              >
                Submit
              </Button>
            </Box>
           
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerifyForgetPassword;