import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const LessonDisputesManagement : NextPage =()=>{
    return <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
        <Typography
        sx={{ flex: "1 1 100%", fontSize: "1.5rem" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        LessonDisputesManagement is coming soon
      </Typography>
        </Box>
}

export default LessonDisputesManagement