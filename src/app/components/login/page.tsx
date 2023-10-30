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


  const commonButton  = () => ({
        margin: '10px 0',
        padding: '10px 20px',
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


  const forgot  = () => ({
    fontWeight: '500',
    fontSize: '16px',
    color: '#333',
    span: {
      color: '#2599FB',
      fontWeight: '500',
      fontSize: '16px',
      paddingLeft: '10px',
      cursor: 'pointer',
      textTransform: 'capitalize',
        "&:hover": {
          color: '#D91962',
        }
    }
})




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
          background: 'linear-gradient(135deg,  rgba(249,203,34,1) 0%,rgba(17,145,249,1) 100%)',

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
            <Box display="flex" alignItems="center" justifyContent="center" mr={1} mt={2} mb={1}>
              {/* <Image src="/logo.png" alt="Logo" 
>>>>>>> 8a38af9ff3fd5a7e0ab0e7bce5d4546e751b97ea
                style={{ 
                margin: "auto",
                  objectFit: "contain"
        }}
<<<<<<< HEAD
        />
              </Box>
       

        <Typography component="h2" variant="h5" mt={2}>
          Sign in
        </Typography>

        <form style={{ width: "100%", marginTop: "10px", textAlign: "center" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userId"
            label="User ID"
            name="userId"
            autoComplete="userId"
            color='warning'
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
            color='warning'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // backgroundColor="#F9D136"
            // style={{backgroundColor: "#21b6ae",}}
            sx={{
              color: "#000",
              marginTop: 5,
              fontWeight: "600",
              fontSize: 15,
              
              
              ':hover': {
                bgcolor: '#F9D136', // theme.palette.primary.main
                color: '#fff',
                
              },
            }}
            // style={submitButtonStyle}
          >
            Login
          </Button>
        </form>
        <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  >
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="500"
                    >
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

=======


       
        /> */}

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
              sx={commonButton}
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
            <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
              <Typography color="textSecondary" variant="h6" sx={forgot}>
                Forget your password?
                <Typography variant="h6" component="span" onClick={()=>router.push('/forgetPassword')}>
                Forgot Password
              </Typography>
              </Typography>
              
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
