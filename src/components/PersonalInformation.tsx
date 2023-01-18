import { Typography, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Fragment, FunctionComponent } from "react";

interface IPersonalInformationProps {

}


const PersonalInformation: FunctionComponent<IPersonalInformationProps> = ({

}) => {
    return <>
         <Fragment>
      <Typography variant="h6" gutterBottom>
        Your Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="first-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="last-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            fullWidth
            autoComplete="phone-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="address-line"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="province"
            name="province"
            label="Province/Territory"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalCode"
            name="postalCode"
            label="Postal code"
            fullWidth
            autoComplete="postal-code"
            variant="standard"
          />
        </Grid>
      </Grid>
    </Fragment>
        </>
}

export default PersonalInformation;
