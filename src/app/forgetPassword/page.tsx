    "use client";
    import React, { useState } from "react";
    import {  Box,
    Paper,
    Typography,
    TextField,
    Grid,
    Container,
    Stack,
    Card, } from "@mui/material";
    import Button, { buttonClasses } from "@mui/material/Button";
    import Image from "next/image";
    import Link from "next/link";

    const commonButton  = () => ({
    margin: '10px 0',
    marginTop:3,
    padding: '5px 10px',
    backgroundColor: '#D91962!important',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    textTransform: 'capitalize',
    "&:hover": {
      backgroundColor: '#edc627!important',
      border: 'none',
    }
})

    const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleVerifyClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCheckClick = () => {
      setIsModalOpen(false);
    };
    return (
    <Box
    sx={{
      position: "relative",
      "&:before": {
        content: '""',
        background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        position: "absolute",
        height: "100%",
        width: "100%",
        opacity: "0.3",
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
          sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
        >
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Image
            src="/logo.png"
            alt="Vercel Logo"
                //className="dark:invert"
            
            width={200}
            height={250}
            priority
            />
             
          </Box>
          <Typography variant="h5" mt={3} ml={1} sx={{color:"#36454F", textAlign:"center"}}>
              Forget password
            </Typography>
            <Typography ml={1} mt={1} sx={{color:"#A9A9A9", fontSize:"14px"}}>
          Enter your email address and we’ll send a link to reset your password
            </Typography>
            <Box
              style={{ width: "100%", marginTop: "10px", textAlign: "center" }}
            >
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        </Box>
        <Button 
            fullWidth
            sx={commonButton}
            variant="outlined" onClick={handleVerifyClick}>
        Verify
      </Button>
        </Card>
      </Grid>
    </Grid>
  </Box>
  )
}

export default ForgetPassword;
