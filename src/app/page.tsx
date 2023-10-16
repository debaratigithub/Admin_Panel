
'use client'
import React from "react";
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

const Login: React.FC = () => {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
    console.log("clicked");
  };

  return (
    <Box
      sx={{
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
            <Box display="flex" alignItems="center" justifyContent="center">
              {/* <Image src="/logo.png" alt="Logo" 
                style={{ 
                margin: "auto",
                  objectFit: "contain"
        }}


       
        /> */}

              <Image
                src="/logo.png"
                alt="Vercel Logo"
                //className="dark:invert"
                width={150}
                height={100}
                priority
              />
            </Box>

            <Typography component="h2" variant="h5" mt={2}>
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleSubmit}
              style={{ width: "100%", marginTop: "10px", textAlign: "center" }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userId"
                label="User ID"
                name="userId"
                autoComplete="userId"
                color="warning"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="warning"
              />
               <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                // backgroundColor="#F9D136"

                sx={{
                  color: "#000",
                  marginTop: 5,
                  fontWeight: "600",
                  fontSize: 15,
                  backgroundColor: "#F9D136",

                  ":hover": {
                    bgcolor: "#F9D136", // theme.palette.primary.main
                    color: "#fff",
                  },
                }}
                // style={submitButtonStyle}
                onSubmit={handleSubmit}
              >
                Login
              </Button> */}
            </Box>
            <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
              <Typography color="textSecondary" variant="h6" fontWeight="500">
                Forget your password?
              </Typography>
              <Typography
                // component={Link}
                // href="/dashboard"
                fontWeight="500"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                }}
              >
                Forgot Password
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
