//     "use client";
//     import React, { useState } from "react";
//     import {  Box,
//     Paper,
//     Typography,
//     TextField,
//     Grid,
//     Container,
//     Stack,
//     Card, } from "@mui/material";
//     import Button, { buttonClasses } from "@mui/material/Button";
//     import Image from "next/image";
//     import Link from "next/link";

//     const commonButton  = () => ({
//     margin: '10px 0',
//     marginTop:3,
//     padding: '5px 10px',
//     backgroundColor: '#D91962!important',
//     color: '#fff',
//     border: 'none',
//     fontSize: '16px',
//     textTransform: 'capitalize',
//     "&:hover": {
//       backgroundColor: '#edc627!important',
//       border: 'none',
//     }
// })

//     const ForgetPassword = () => {
//     const [email, setEmail] = useState("");
//     const [otp, setOtp] = useState("");
//     const [isModalOpen, setIsModalOpen] = useState(false);
  
//     const handleVerifyClick = () => {
//       setIsModalOpen(true);
//     };
  
//     const handleCheckClick = () => {
//       setIsModalOpen(false);
//     };
//     return (
//     <Box
//     sx={{
//       position: "relative",
//       "&:before": {
//         content: '""',
//         background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
//         backgroundSize: "400% 400%",
//         animation: "gradient 15s ease infinite",
//         position: "absolute",
//         height: "100%",
//         width: "100%",
//         opacity: "0.3",
//       },
//     }}
//   >
//     <Grid
//       container
//       spacing={0}
//       justifyContent="center"
//       sx={{ height: "100vh" }}
//     >
//       <Grid
//         item
//         xs={12}
//         sm={12}
//         lg={4}
//         xl={3}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//     >
//         <Card
//           elevation={9}
//           sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
//         >
//         <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//         <Image
//             src="/logo.png"
//             alt="Vercel Logo"
//                 //className="dark:invert"
            
//             width={200}
//             height={250}
//             priority
//             />
             
//           </Box>
//           <Typography variant="h5" mt={3} ml={1} sx={{color:"#36454F", textAlign:"center"}}>
//               Forget password
//             </Typography>
//             <Typography ml={1} mt={1} sx={{color:"#A9A9A9", fontSize:"14px"}}>
//           Enter your email address and we’ll send a link to reset your password
//             </Typography>
//             <Box
//               style={{ width: "100%", marginTop: "10px", textAlign: "center" }}
//             >
//         <TextField
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         label="Email"
//         name="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         />
//         </Box>
//         <Button 
//             fullWidth
//             sx={commonButton}
//             variant="outlined" onClick={handleVerifyClick}>
//         Verify
//       </Button>
//         </Card>
//       </Grid>
//     </Grid>
//   </Box>
//   )
// }

// export default ForgetPassword;

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
 import {forgotPasswordData} from '../../reduxts/Slices/authslice/forgotpasswordslice'

interface FormData {
  email: string;
  role: string;
}

const ForgetPassword: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    role: 'admin',
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // console.log("clicked",formData);
    // dispatch(forgotPasswordData(formData));
    //router.push("/verify_forgetPassword");
    dispatch(forgotPasswordData(formData)).then((response: any) => {
      console.log(response.payload, "response from login component");

      if (response.payload.status == true) {
        console.log("routing is done");
        router.push("/verify_forgetPassword");
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
            Forget password
            </Typography>
            <Typography ml={1} mt={1} sx={{color:"#A9A9A9", fontSize:"14px"}}>
          Enter your email address and we’ll send a link to reset your password
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
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
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}

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

export default ForgetPassword;

