import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CustomizedTables from "../components/table/Table";

import Piechart from "../components/charts/pie";




const DashboardPage: NextPage = () => {
  const headCells: any = [
    {
      id: "teachername",
      numeric: false,
      disablePadding: true,
      label: "Teacher Name",
    },
    {
      id: "studentname",
      numeric: false,
      disablePadding: false,
      label: "Student Name",
    },
    {
      id: "date",
      numeric: false,
      disablePadding: false,
      label: "Date Of Session",
    },
    {
      id: "time",
      numeric: true,
      disablePadding: false,
      label: "Time Of Session",
    },
    {
      id: "amount",
      numeric: true,
      disablePadding: false,
      label: "Payment Amount",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status",
    },
  ];
  const rows: any = [
    {
      teachername: "Debarati Patwari",
      studentname: "Riya Saha",
      date:"12/09/2023",
      time:"12PM-1PM",
      amount:"$100",
      status: "On-Going",
    },
    {
      teachername: "Sohini Pal",
      studentname: "Rintu Sarkar",
      date:"12/09/2023",
      time:"2PM-3PM",
      amount:"$500",
      status: "Starts in 55 minutes",
    },
    
  ];
  const actionData = [
    { name: "details", type:"button", icon: "", path: "/details", params: "name" },
    { name: "toggle", type: "toggle", icon: "", path: "", params: "" },
  ];
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: any = [5, 10, 25];


 const Teacherdata = [
    ["Days", "Registration (in millions)"],
    ["15 Days", 2.85],
    ["30 Days", 1.66],
    ["45 Days", 0.316],
    
  ];
  
 const Teacheroptions = {
    legend: "none",
    pieSliceText: "label",
    title: "Teacher Registraion",
    pieStartAngle: 100,
  };

  const Studentdata = [
    ["Days", "Registration (in millions)"],
    ["15 Days", 1.85],
    ["30 Days", 1.66],
    ["45 Days", 2.316],
  ];
  
 const Studentoptions = {
    legend: "none",
    pieSliceText: "label",
    title: "Student Registration",
    pieStartAngle: 100,
  };


  // const font20 = () => ({
  //   fontSize: '20px',
  
  // })


  return (
    <Box>
      {/* <h1 className="text-4xl font-bold">I am dashboard hi</h1> */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box>
          <Typography variant="h3" component="h3">
            Dashboard
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={8} md={15}>
            <Stack spacing={2} direction="row">
              <Card sx={{ maxWidth: 345, bgcolor: "green", color: "white" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Total Number of students
                  </Typography>
                  <Typography variant="body2" color="white'">
                    1000
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345, bgcolor: "red", color: "white" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Total Number of Teacher
                  </Typography>
                  <Typography variant="body2" color="white'">
                    2000
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345, bgcolor: "blue", color: "white" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Total Amount of Earning
                  </Typography>
                  <Typography variant="body2" color="white'">
                    $30,555
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={6} md={15}>
            <Box>
              <Typography variant="h5" component="h5" sx={{fontSize: '25px', paddingBottom: '10px'}}>
                Upcoming Sessions
              </Typography>
            </Box>
            {/* table */}
            <CustomizedTables
              // actionData={actionData}
              headCells={headCells}
              rows={rows}
              rowsPerPageOptions={rowsPerPageOptions}
              updateEndPoint={'/update'}
            />
          </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          

          {/* chart reprentation of data */}
         
          <Grid item xs={6} md={4}>
          <Typography variant="h5" component="h5" sx={{fontSize: '18px'}}>
          Chart View Of Number of Teachers Who Are Registred In Last 15/30/45 Days
              </Typography>
            <Piechart data={Teacherdata} options={Teacheroptions}/>
          </Grid>
          <Grid item xs={6} md={4}>
          <Typography variant="h5" component="h5" sx={{fontSize: '18px'}}>
          Chart View Of Number of Students Who Are Registred In Last 15/30/45 Days
              </Typography>
          <Piechart data={Studentdata} options={Studentoptions}/>
          </Grid>
          
          

          <Grid item xs={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                bgcolor: "#eee",
                color: "black",
                height: 350,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '18px'}}>
                  New Teachers List(Waiting For Admin Approval)
                </Typography>
                <Typography> 1. Himadri Bar</Typography>
                <Typography> 2. Arpita Ghosh</Typography>
                <Typography variant="body2" color="white'"></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardPage;
