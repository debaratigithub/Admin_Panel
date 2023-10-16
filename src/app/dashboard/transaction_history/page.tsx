import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const TransactionHistory : NextPage =()=>{
    return <Box>
        
        <Typography
        sx={{ flex: "1 1 100%", fontSize: "2.5rem" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
      TransactionHistory is coming soon
      </Typography>
        </Box>
}

export default TransactionHistory