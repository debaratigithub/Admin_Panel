import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const NotificationPanel : NextPage =()=>{
    return <Box>
        
        <Typography
        sx={{ flex: "1 1 100%", fontSize: "2.5rem" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        NotificationPanel is coming soon
      </Typography>
        </Box>
}

export default NotificationPanel