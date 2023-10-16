"use client";
import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Simreply: NextPage = (params: any) => {
  const SimData: any = JSON.parse(decodeURIComponent(params.params.simreply));
  //   console.log(
  //     JSON.parse(decodeURIComponent(params.params.simreply)),
  //     "++++++++++++",SimData
  //   );

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
    <Box>
      <Typography>Question:{SimData.message}</Typography>
      <Typography>Answer:</Typography>
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
          label="Type Your Answer Here"
          type="text"
          id="replyanswer"
          autoComplete="replyanswer"
        />

        <Stack spacing={2}>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
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
