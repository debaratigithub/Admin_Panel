"use client";
import CustomizedTables from "@/app/components/table/Table";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import SearchBox from "@/app/components/searchbox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}





//Redux Toolkit
import { RootState} from '../../../reduxts/store'
import {useAppDispatch, useAppSelector} from '../../../reduxts/hooks'
import {fetchallStudentdata} from '../../../reduxts/Slices/studentmanagementslice/getallstudent'
import {Studentdata} from '../../../reduxts/Slices/studentmanagementslice/getstudent'
import {blockStudent} from '../../../reduxts/Slices/studentmanagementslice/blockStudent'
import {unblockStudent} from '../../../reduxts/Slices/studentmanagementslice/unblockstudentslice'
// blockStudent

const StudentProfileManagemet: NextPage = () => {

 

  const router = useRouter();

  //calling all student data through redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch the fetchSomeDataAsync action when the component mounts
    dispatch(fetchallStudentdata());
   
  }, [dispatch]);



  const handleDetails = (id:any) => {
    // Dispatch the action with the id from the row
    dispatch(Studentdata(id)).then((response: any) => {
      console.log(response.payload.student, "response from click component");

      if (response.payload.status == true) {

   const queryString = encodeURIComponent(JSON.stringify(response.payload.student));
    console.log(queryString,"student sdata")
    router.push(`/dashboard/student_profile_management/${queryString}`);
        console.log("routing is done");
     
        ///router.push("/dashboard");
      } else {
        console.log("routing is not done");
      }
    });
   
  };

  const handleBlock = (id:any) => {
    // Dispatch the action with the id from the row
    dispatch(blockStudent(id));
  };

  const handleunBlock = (id:any) => {
    // Dispatch the action with the id from the row
    dispatch(unblockStudent(id));
  };

   //blocked unblocked
   const [isBlocked, setIsBlocked] = useState(false);

   const handleToggleBlock = async (id:any) => {
     try {
       
 
       // Determine which action to dispatch based on the current user status
       //const actionToDispatch = isBlocked ?blockStudent : unblockStudent;
       const actionToDispatch = isBlocked ?unblockStudent : blockStudent;
 
       await dispatch(actionToDispatch(id));
       setIsBlocked(!isBlocked); // Toggle the local state after the action is dispatched
     } catch (error) {
       console.error('Error during block/unblock dispatch:', error);
     }
   };
   console.log(isBlocked,"++++++++++")

  const apiuserdata = useAppSelector((state: RootState) =>state.all_studentdata.data);
 // console.log(apiuserdata?.studentList,"+++++++++++")
  //const apiuserdata = useAppSelector((state: RootState) => state.usersData.userAPIData);
  //Ading Interface and decareling types for table header
  interface HeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
    hide: boolean
  }
  const headCells: HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Student Name",
      hide: false
    },
    {
      id: "email",
      numeric: false,
      disablePadding: false,
      label: "Email Address",
      hide: false
    },
    {
      id: "phone",
      numeric: true,
      disablePadding: false,
      label: "Phone Number",
      hide: false
    },

    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status Of Application",
      hide: false
    },
    {
      id: "id",
      numeric: true,
      disablePadding: false,
      label: "",
      hide: true
    },
    {
      id: "isActive",
      numeric: true,
      disablePadding: false,
      label: "",
      hide: true
    },
    
  ];

   //Ading Interface and decareling types for table rows
   interface Row {
    name: string;
    email: string;
    phone: number;
    isActive: boolean;
    status:string;
    id:string;
  }
  // const rows: Row[] =  [
  //   {
  //     name: "Riya Saha",
  //     email: "riyya@gmail.com",
  //     phone: 7875678987,
  //     status: "Active",
  //     //status:0
  //   },
  //   {
  //     name: "Rintu Sarkar",
  //     email: "rintu@gmail.com",
  //     phone: 6875678787,
  //     status: "In-Active",
  //     //status:1
  //   },
  // ];

  const rows: Row[] =  apiuserdata?.studentList

   //For Action section

   interface ActionData {
    name: string;
    type: "button" | "toggle";
    icon: string;
    path: string;
    params: string;
    designation: string;
   
  }
  const actionData : ActionData[] = [
    {
      name: "details",
      type: "button",
      icon: "",
      path: "/details",
      params: "name",
      designation: "student",
      
    },
    {
      name: "toggle",
      type: "toggle",
      icon: "",
      path: "",
      params: "",
      designation: "",
      
    },
    {
      name: "block",
      type: "button",
      icon: "",
      path: "/block",
      params: "name",
      designation:"block",
      
     
    },
  ];
  // const statusData = [{1:'Active', 0:'In-Active'}]
  const rowsPerPageOptions: number[] = [5, 10, 25];

  //Searchbox
  //console.log(rows,"Row data student")
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredRows = rows.filter((row: Row) => {
      return row.name.toLowerCase().includes(query.toLowerCase());
    });
    // You can perform search-related operations here using the query.
    // For example, you can make an API call with the search query.
    console.log(filteredRows, "Search result");
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
      <Typography
        sx={{ flex: "1 1 100%", fontSize: "1.5rem", fontWeight: '600' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Student List Who are Registered With Spaceship Languages
      </Typography>

{/* searchbox */}
      <Box>
        {/* <Typography>Search Student</Typography> */}
        <SearchBox onSearch={handleSearch} placeHolder="Search Students ..."/>
        {/* <Typography>Search Query: {searchQuery}</Typography> */}
      </Box>
      {/* <CustomizedTables/> */}
      {/* table */}
      <CustomizedTables
        actionData={actionData}
        headCells={headCells}
        rows={rows}
        rowsPerPageOptions={rowsPerPageOptions}
        updateEndPoint={"/update"}
      />

{/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell >Email Address</StyledTableCell>
            <StyledTableCell >Phone Numbe</StyledTableCell>
            <StyledTableCell >Status Of Application</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows?.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.email}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.phone}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
              In-Active
              </StyledTableCell>
              

              <StyledTableCell align="right" key={`buttonID-${row.id}${index}`}>
                <Button  color="primary" onClick={()=>handleDetails(row.id)}>
                  Details
                </Button>
                <Button variant="contained" color="secondary" >
                  Tick
                </Button>
               

       <Button variant="contained" color="secondary" onClick={()=>handleToggleBlock(row.id)} key={`buttonIDi-${row.id}`}>
        {isBlocked ? 'Unblock' : 'Block'}
      </Button>
               
              </StyledTableCell>

        
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}


    </Box>
  );
};

export default StudentProfileManagemet;
