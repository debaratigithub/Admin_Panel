import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const NotificationPanel : NextPage =()=>{
    return <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <Typography
        sx={{ flex: "1 1 100%", fontSize: "1.5rem", fontWeight: '600' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        NotificationPanel is coming soon
      </Typography>
        </Box>
}

export default NotificationPanel