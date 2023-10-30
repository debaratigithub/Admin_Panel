"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import EnhancedTableHead from "./TableHeader";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import { TablePagination, ToggleButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

//import SearchBar from "material-ui-search-bar";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

interface DataObject {
  [key: string]: number | string;
}

function getComparator<Key extends keyof DataObject>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function CustomizedTables(props: any) {
  const router = useRouter();
  //console.log(props.actionData, "+++++ rows");
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string | number>("calories");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isToggled, setIsToggled] = useState(false);

  var rows = props.rows;
  // Extract the valid keys from arrayB
  let allowedKeys =
    props.headCells &&
    props.headCells.length > 0 &&
    props.headCells.map((item: { id: number }) => item.id);
  // Filter out the properties that don't exist in arrayB
  rows = rows.map((item: any) => {
    let filteredItem: any = {};
    allowedKeys.forEach((key: any) => {
      if (item.hasOwnProperty(key)) {
        filteredItem[key] = item[key];
      } else {
        filteredItem[key] = "";
      }
    });
    return filteredItem;
  });

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const onRowClick = (
    row: any,
    actionDataItem: any,
    type: string,
    designation: string
  ) => {
    // console.log(
    //   row, 'row',
    //   type, "full path",
    //   `${actionDataItem.path}/${row[actionDataItem.params]}`
    // );
    console.log(row, "++++++++++++");
    if (type == "toggle") {
      rows = rows.map((item: any, index: Number) => {
        if (item.name == row.name) {
          // update the status to "In-Active"
          return {
            ...item,
            status: row.status == "Active" ? "In-Active" : "Active",
          };
        }

        // if(row.status && item.name == row.name){
        //   // return{
        //   //   ...item,
        //   //   status: !(row.status)
        //   // }
        //   setIsToggled(!isToggled);
        //   console.log(row.status == "Active" ? "In-Active" : "Active", "++++++++++++");

        // }
        //console.log(row.status, "++++++++++++",isToggled);
        // For other items, return them unchanged
        return item;
      });
    }

    // Dynamic Routing on details pages
    if (type == "button" && designation == "student") {
      const queryString = encodeURIComponent(JSON.stringify(row));

      router.push(`/dashboard/student_profile_management/${queryString}`);
    }
    if (type == "button" && designation == "teacher") {
      const queryString = encodeURIComponent(JSON.stringify(row));

      router.push(`/dashboard/teacher_profile_management/${queryString}`);
    }
    if (type == "button" && designation == "addcms") {
      const queryString = encodeURIComponent(JSON.stringify(row));

      router.push(`/dashboard/content_management_system/add/${queryString}`);
    }
    if (type == "button" && designation == "editcms") {
      const queryString = encodeURIComponent(JSON.stringify(row));

      router.push(`/dashboard/content_management_system/edit/${queryString}`);
    }

    if (type == "button" && designation == "simreply") {
      const queryString = encodeURIComponent(JSON.stringify(row));

      router.push(`/dashboard/support_inquries_management/${queryString}`);
    }

    if (type == "button" && designation == "editblog") {
      const queryString = encodeURIComponent(JSON.stringify(row));

      router.push(`/dashboard/blog_module_management/edit/${queryString}`);
    }

    //console.log(row, '+++++')
  };

  //For selection single id from table, Only name is selected here for now
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    console.log("object+++++++++++++", event);
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    // console.log("object+++++++++++++",newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    // console.log(event, 'event');
    //console.log(newPage, "newPage");
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(event.target.value, "event.target.value");
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [rows, order, orderBy, page, rowsPerPage]
  );
  //console.log(visibleRows, "++");
  // console.log(props.headCells, "---");

  const maintable = () => ({
    backgroundColor: "#eee",
    border: "1px solid #ccc",
  });

  const customtable = () => ({
    minWidth: 750,
    backgroundColor: "#fff",
    td: {
      padding: "10px 16px",
      fontSize: "13px",
      fontWeight: "500",
      color: "#858585",
      textAlign: "center",
      "&:last-child": {
        textAlign: "right",
      },
    },
    th: {
      padding: "10px 16px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#333",
      background: "#fff",
      svg: {
        opacity: "1",
      },
    },
    // li: {
    //   display: "block",
    //   color: '#fff',
    //   span: {
    //     fontSize: '15px',
    //   },
    //   svg: {
    //     color: '#fff',
    //   }
    // },
    // "&:hover": {
    //   backgroundColor: '#2599FB',
    // }
  });

  const details = () => ({
    margin: "10px 0",
    padding: "5px 15px",
    backgroundColor: "#2599FB!important",
    color: "#fff",
    border: "none",
    fontSize: "13px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#edc627!important",
      border: "none",
    },
  });

  const blocked = () => ({
    margin: "10px 0",
    padding: "5px 15px",
    backgroundColor: "#D91962!important",
    color: "#fff",
    border: "none",
    fontSize: "13px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#edc627!important",
      border: "none",
    },
  });

  const checkicon = () => ({
    margin: "10px 0",
    padding: "5px 15px",
    backgroundColor: "#fff!important",
    color: "#333  ",
    fontSize: "13px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#edc627!important",
      color: "#fff",
    },
  });

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
      <Paper sx={maintable}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}

        <TableContainer>
          <Table sx={customtable} aria-labelledby="tableTitle">
            {/* header section start*/}
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={props.headCells}
              actionDataFlag={props.actionData && props.actionData.length > 0}
            />
            {/* header section end*/}

            <TableBody>
              {visibleRows.map((row: any, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={labelId}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {/* <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        onClick={(event) => handleClick(event, row.name)}
                      />
                    </TableCell> */}
                    {Object.keys(row).map((keys: any, objIndex) =>
                      objIndex == 0 ? (
                        <TableCell
                          key={`objIndex-${objIndex}`}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          onClick={(event) => handleClick(event, row.name)}
                        >
                          {row[keys]}
                        </TableCell>
                      ) : (
                        <TableCell
                          align="right"
                          key={`objIndex-${objIndex}`}
                          onClick={(event) => handleClick(event, row.name)}
                        >
                          {row[keys]}
                        </TableCell>
                      )
                    )}
                    {props.actionData &&
                      props.actionData.map(
                        (actionDataItem: any, actionDataIndex: Number) => (
                          <TableCell
                            align="right"
                            key={`actionDataItem-${actionDataIndex}`}
                          >
                            {/* Action checkbox */}
                            {actionDataItem.type === "toggle" && (
                              <ToggleButton
                                value="check"
                                sx={checkicon}
                                // selected={selected}
                                // onChange={() => {
                                //   setSelected(!selected);
                                // }}
                                onClick={() =>
                                  onRowClick(
                                    row,
                                    actionDataItem,
                                    actionDataItem.type,
                                    actionDataItem.designation
                                  )
                                }
                              >
                                <CheckIcon />
                              </ToggleButton>
                            )}

                            {/* View Details Button */}
                            {actionDataItem.type === "button" && (
                              <Button
                                sx={
                                  actionDataItem.name == "details"
                                    ? details
                                    : blocked
                                }
                                variant="outlined"
                                onClick={() =>
                                  onRowClick(
                                    row,
                                    actionDataItem,
                                    actionDataItem.type,
                                    actionDataItem.designation
                                  )
                                }
                                // onClick={(event) => handleDynamicRoutes(event, row.name)}
                                //onClick={() => handleClick(row, actionDataItem,actionDataItem.type)}
                                // selected={selected}
                                // onChange={() => {
                                //   setSelected(!selected);
                                // }}
                              >
                                {actionDataItem.name}
                              </Button>
                            )}
                          </TableCell>
                        )
                      )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {visibleRows && visibleRows.length == 0 && (
            <Typography>{"No Record found"}</Typography>
          )}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={props.rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
