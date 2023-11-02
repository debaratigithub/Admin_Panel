// 'use client'
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CustomizedTables from "../components/table/Table";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { styled, useTheme } from "@mui/material/styles";
import teacherImg from "../../image/presentation.png";
import studentImg from "../../image/graduated.png";
import paymentImg from "../../image/earning.png";
import Piechart from "../components/charts/pie";
import Image from "next/image";
//import { useRouter } from "next/navigation";

import CardHeader from "@mui/material/CardHeader";
import Link from "next/link";

const DashboardPage: NextPage = () => {
 // const router = useRouter();
  //Ading Interface and decareling types for table header
  interface HeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }

  const headCells: HeadCell[] = [
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

  //Ading Interface and decareling types for table rows
  interface Row {
    teachername: string;
    studentname: string;
    date: string;
    time: string;
    amount: string;
    status: string;
  }
  const rows: Row[] = [
    {
      teachername: "Debarati Patwari",
      studentname: "Riya Saha",
      date: "12/09/2023",
      time: "12PM-1PM",
      amount: "$100",
      status: "On-Going",
    },
    {
      teachername: "Sohini Pal",
      studentname: "Rintu Sarkar",
      date: "12/09/2023",
      time: "2PM-3PM",
      amount: "$500",
      status: "Starts in 55 minutes",
    },
  ];

  interface DataType {
    title: string;

    avatarText: string;
  }
  const rowsPerPageOptions: number[] = [5, 10, 25];
  const data: DataType[] = [
    {
      title: "Himadri Bar",
      avatarText: "HB",
    },
    {
      title: "Arpita Ghosh",
      avatarText: "AG",
    },
    {
      title: "Sapta Singha",

      avatarText: "SS",
    },
    {
      title: "Srinath Bar",

      avatarText: "SB",
    },
    {
      title: "Debarati Patwari",

      avatarText: "DP",
    },
  ];

  type DataRow = [string, string] | [string, number];

  const Teacherdata: DataRow[] = [
    ["Days", "Registration (in millions)"],
    ["15 Days", 2.85],
    ["30 Days", 1.66],
    ["45 Days", 0.316],
  ];

  interface DataOptions {
    legend: "none" | "left" | "top" | "right" | "bottom" | "center";
    pieSliceText: "none" | "label" | "percentage" | "value";
    title: string;
    pieStartAngle: number;
  }

  const Teacheroptions: DataOptions = {
    legend: "none",
    pieSliceText: "label",
    title: "",
    pieStartAngle: 100,
  };

  const Studentdata: DataRow[] = [
    ["Days", "Registration (in millions)"],
    ["15 Days", 1.85],
    ["30 Days", 1.66],
    ["45 Days", 2.316],
  ];

  const Studentoptions: DataOptions = {
    legend: "none",
    pieSliceText: "label",
    title: "",
    pieStartAngle: 100,
  };

  return (   

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box>
          <Typography
            variant="h4"
            component="h5"
            sx={{ paddingBottom: "10px", fontSize: "1.5rem", marginBottom: '10px', fontWeight: '600' }}
          >
            Dashboard
          </Typography>
        </Box>

        <Grid container spacing={6}>


            {/* card in dashboard */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                border: "1px solid",
                borderColor: "#fff",
              }}
            >
              <CardContent>
                <Typography variant="h6">Teacher</Typography>
                <Typography
                  variant="body2"
                  sx={{ letterSpacing: "0.25px", marginTop: 2 }}
                >
                  Total Number of Teacher
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mt: 1, mb: 2, color: "primary.main" }}
                >
                  200
                </Typography>
                <Link href="/dashboard/teacher_profile_management">
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderColor: "#1976d2",
                    color: "#1976d2",
                    border: "0.5px solid ",
                    "&:hover": {
                      color: "#fff",
                      border: "none",
                    },
                  }}
                 // onClick={()=>router.push("/dashboard/teacher_profile_management")}
                >
                  View Details
                </Button>
                </Link>
                {/* <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} /> */}
                <Image
                  alt="trophy"
                  src={teacherImg}
                  style={{
                    right: 6,
                    bottom: 20,
                    height: 98,
                    width: 98,
                    position: "absolute",
                    objectFit: "contain",
                  }}
                />
              </CardContent>
            </Card>
            
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                border: "1px solid",
                borderColor: "#fff",
              }}
            >
              <CardContent>
                <Typography variant="h6">Students</Typography>
                <Typography
                  variant="body2"
                  sx={{ letterSpacing: "0.25px", marginTop: 2 }}
                >
                  Total Number of Students
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mt: 1, mb: 2, color: "primary.main" }}
                >
                  1000
                </Typography>
                <Link href="/dashboard/student_profile_management">
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderColor: "#1976d2",
                    color: "#1976d2",
                    border: "0.5px solid ",
                    "&:hover": {
                      color: "#fff",
                      border: "none",
                    },
                  }}
                 // onClick={()=>router.push("/dashboard/student_profile_management")}
                >
                  View Details
                </Button>
                </Link>
                {/* <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} /> */}
                <Image
                  alt="trophy"
                  src={studentImg}
                  style={{
                    right: 6,
                    bottom: 20,
                    height: 98,
                    width: 98,
                    position: "absolute",
                    objectFit: "contain",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                border: "1px solid",
                borderColor: "#fff",
              }}
            >
              <CardContent>
                <Typography variant="h6">Earnings</Typography>
                <Typography
                  variant="body2"
                  sx={{ letterSpacing: "0.25px", marginTop: 2 }}
                >
                  Total Amount of Earning
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mt: 1, mb: 2, color: "primary.main" }}
                >
                  $242.8k
                </Typography>
                <Link href="/dashboard/revenue_history">
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderColor: "#1976d2",
                    color: "#1976d2",
                    border: "0.5px solid ",
                    "&:hover": {
                      color: "#fff",
                      border: "none",
                    },
                  }}
                 // onClick={()=>router.push("/dashboard/revenue_history")}
                >
                  View Details
                </Button>
                </Link>
                {/* <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} /> */}
                <Image
                  alt="trophy"
                  src={paymentImg}
                  style={{
                    right: 6,
                    bottom: 20,
                    height: 98,
                    width: 98,
                    position: "absolute",
                    objectFit: "contain",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>



{/* table of upcoming session */}

          <Grid item xs={6} md={15}>
            <Box>
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontSize: "20px"}}
              >
                Upcoming Sessions
              </Typography>
            </Box>
            {/* table */}
            <CustomizedTables
              // actionData={actionData}
              headCells={headCells}
              rows={rows}
              rowsPerPageOptions={rowsPerPageOptions}
              updateEndPoint={"/update"}
            />
          </Grid>
        </Grid>


        
        <Box height={20} />
        <Grid container spacing={6}>

          {/*pie chart reprentation of data */}
          
          <Grid item xs={6} md={4}>
            <Typography variant="h5" component="h5" sx={{ fontSize: "18px" }}>
              Chart View Of Number of Teachers Who Are Registred In Last
              15/30/45 Days
            </Typography>
            <Piechart data={Teacherdata} options={Teacheroptions} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h5" component="h5" sx={{ fontSize: "18px" }}>
              Chart View Of Number of Students Who Are Registred In Last
              15/30/45 Days
            </Typography>
            <Piechart data={Studentdata} options={Studentoptions} />
          </Grid>
         

          <Grid item xs={12} md={4} lg={4}>
            {/* <SalesByCountries /> */}

            <Card sx={{ position: "relative", backgroundColor: "#EeE" }}>
              <CardHeader
                title="New Teachers List"
                titleTypographyProps={{
                  sx: {
                    lineHeight: "1.2 !important",
                    letterSpacing: "0.31px !important",
                  },
                }}
              />
              <CardContent>
                {data.map((item: DataType, index: number) => {
                  return (
                    <Box
                      key={item.title}
                      sx={{
                        display: "flex",
                        alignItems: "center",

                        ...(index !== data.length - 1 ? { mb: 2.5 } : {}),
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 38,
                          height: 38,
                          marginRight: 1,
                          fontSize: "0.9rem",
                          color: "common.white",
                        }}
                      >
                        {item.avatarText}
                      </Avatar>

                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            marginRight: 2,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              sx={{ mr: 0.5, letterSpacing: "0.25px" }}
                            >
                              {item.title}
                            </Typography>
                            <Box
                              sx={{ display: "flex", alignItems: "center" }}
                            ></Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    
  );
};

export default DashboardPage;
