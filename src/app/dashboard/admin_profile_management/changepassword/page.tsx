// import type { NextPage } from "next";

// const Changepassword : NextPage =()=>{
//     return <div>
//         <h1 className="text-4xl font-bold">Change password form</h1>
//         </div>
// }

// export default Changepassword
'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Changepassword() {

    const [open, setOpen] = React.useState(false);

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
    <ThemeProvider theme={defaultTheme}>
        <Card>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
              name="oldpassword"
              label="Old Password"
              type="password"
              id="oldpassword"
              autoComplete="old-password"
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
          <AlertTitle><strong>Password Change Successfully!</strong></AlertTitle>
        </Alert>
      )}
            </Stack>
           
          </Box>
        </Box>
       
      </Container>
        </Card>
      
    </ThemeProvider>
  );
}