"use client";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const studentdetails: NextPage = (params: any) => {
  const StudentData: any = JSON.parse(
    decodeURIComponent(params.params.studentdetails)
  );
//   console.log(
//     JSON.parse(decodeURIComponent(params.params.studentdetails)),
//     "++++++++++++"
//   );
  return (
    <Grid item xs={6} md={4}>
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "gray",
          color: "black",
          height: 350,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Personal Profile of {StudentData.name}
          </Typography>
          <Typography> Name: {StudentData.name}</Typography>
          <Typography> Email Address: {StudentData.email}</Typography>
          <Typography> Phone Number: {StudentData.phnoe}</Typography>
          <Typography> Status: {StudentData.status}</Typography>
          <Typography> I Want To Learn: French</Typography>
          <Typography> Proficiency Level: Intermediate</Typography>
          <Typography> Goals:Living abroad</Typography>
          <Typography> Regions: India</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default studentdetails;
