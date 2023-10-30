"use client";
import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Simreply {
  date: string;
  name: string;
  designation: string;
  email: string;
  message: string;
}

interface RouteParams {
  params: {
    simreply: string; // It's a string because it's URL-encoded JSON
  };
  searchParams: {};
}

const commonButton  = () => ({  borderColor: "#1976d2",
color: "#1976d2",
border: "0.5px solid ",
width:"15%",
alignSelf:"center",
margin:"auto",
"&:hover": {
  color: "#fff",
  // border: "none",
  // mt:"2px"
}
})

//previouly done with any type
// const Simreply: NextPage = (params: any) => {
//   const SimData: any = JSON.parse(decodeURIComponent(params.params.simreply));
//   //   console.log(
//   //     JSON.parse(decodeURIComponent(params.params.simreply)),
//   //     "++++++++++++",SimData
//   //   );

const Simreply: NextPage<RouteParams> = ({ params }) => {
  const SimData: Simreply = JSON.parse(
    decodeURIComponent(params.simreply)
  );

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
      replyanswer: data.get("replyanswer"),
    });
    setOpen(true);
  };

  return (
    <Box sx={{padding:3}}>
      <Typography variant="h5" sx={{mt:3}}>Question: {SimData.message}</Typography>
      <Typography  sx={{mt: 1 }}>Answer:</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            /> */}
      <TextField
  margin="normal"
  required
  fullWidth
  name="replyanswer"
  placeholder="Type Your Answer Here"
  type="text"
  id="outlined-multiline-static"
  autoComplete="replyanswer"
  variant="outlined"
  // rows={6}
  multiline
            sx={{mb:5}}
  inputProps={{
    style: {
      minHeight: "250px",
      
    
    
    },
}}
/>

        <Stack spacing={2}>
        <Button
                  size="small"
                  variant="contained"
                  sx={commonButton}
                >
            Submit
          </Button>
          {open && (
            <Alert severity="success" onClose={handleClose}>
              <AlertTitle>
                <strong>You Replied to {SimData.name}</strong>
              </AlertTitle>
            </Alert>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Simreply;
