
"use client"

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
//import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from "next/navigation";

const AdminprofileManagemet:NextPage = ()=> {
  const router = useRouter();
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Admin Profile Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            //label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value="Debarati"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            //label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value="Patwari"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            //label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value="Webel Bhaban ,Sakti Tower"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            // label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value="Saltlake Sector 5"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            //label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value="Saltlake Sector 5"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            //label="State/Province/Region"
            fullWidth
            variant="standard"
            value="West Bengal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            //label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value="713098"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            //label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value="India"
          />
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> */}
          <Button
            variant="outlined"
            endIcon={<SettingsIcon />}
            onClick={() => {
              router.push("/dashboard/admin_profile_management/changepassword");
              console.log("clicked");
            }}
          >
            Change Password
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default AdminprofileManagemet