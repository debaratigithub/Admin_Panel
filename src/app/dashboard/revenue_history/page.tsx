import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const RevenueHistory : NextPage =()=>{
    return <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
        <Typography
        sx={{ flex: "1 1 100%", fontSize: "1.5rem", marginBottom: '10px' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
       RevenueHistory is coming soon
      </Typography>
        </Box>
}

export default RevenueHistory