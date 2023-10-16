"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const teacherdetails: NextPage = (params: any) => {
  const TeacherData: any = JSON.parse(
    decodeURIComponent(params.params.teacherdetails)
  );
  // console.log(TeacherData.phone
  //   ,"++++++++++++")
  return (
    <Grid item xs={6} md={4}>
      {/* personal details */}
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "gray",
          color: "black",
          height: 450,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Personal Profile of {TeacherData.name}
          </Typography>
          <Typography> Name: {TeacherData.name}</Typography>
          <Typography display="inline">
            Profile Image:
            <Image
              src="/dp.avif"
              alt="Vercel Logo"
              //className="dark:invert"
              width={50}
              height={24}
              priority
            />
          </Typography>

          <Typography> Email Address: {TeacherData.email}</Typography>
          <Typography> Phone Number: {TeacherData.phone}</Typography>
          <Typography> Status: {TeacherData.status}</Typography>
          <Typography> Country: India</Typography>
          <Typography> State: West Bengal</Typography>
          <Typography> City: Kolkata</Typography>
          <Typography> Date Of Birth: 10/11/2023</Typography>
          <Typography> Gender: None</Typography>
          <Typography> Country: India</Typography>
          <Typography> Teaching Language: French</Typography>
          <Typography> Proficiency Level: Intermediate</Typography>
        </CardContent>
      </Card>

      {/* teaching details */}
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "black",
          color: "white",
          height: 350,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Teaching Profile of {TeacherData.name}
          </Typography>
          <Typography> Video Introduction:</Typography>
          <Typography>
            {" "}
            About Me: Hi I am {TeacherData.name} teaches French Language.
          </Typography>
          <Typography> Lessons & Teaching Style:</Typography>
          <Typography> Teaching Material:</Typography>
          <Typography> Educational Details: Masters</Typography>
          <Typography> Work Experience: 2 Years</Typography>
          <Typography> Certificates:</Typography>
          <Typography> Status: {TeacherData.status}</Typography>
        </CardContent>
      </Card>

      {/* bank details */}
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "#4dd0e1",
          color: "black",
          height: 350,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bank Details {TeacherData.name}
          </Typography>
          <Typography>Bank Name: State Bank Of India</Typography>
          <Typography> Routing Number: 123</Typography>
          <Typography> Account Number: SBI123ddffg444</Typography>
          <Typography> Account Holder Name: {TeacherData.name}</Typography>
          <Typography> Country: India</Typography>
          <Typography> State: West Bengal</Typography>
          <Typography> City: Kolkata</Typography>
          <Typography> Address: Saltlake Sector 5</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default teacherdetails;
