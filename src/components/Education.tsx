import { Typography, Grid, TextField } from "@mui/material";
import { Fragment, FunctionComponent } from "react";

interface IEducationProps {

}

const Education: FunctionComponent<IEducationProps> = ({

}) => {
    return <>
         <Fragment>
      <Typography variant="h6" gutterBottom>
        Your Education
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="jobTitle"
            name="jobTitle"
            label="Job Title"
            fullWidth
            autoComplete="job-title"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="company"
            name="company"
            label="Company"
            fullWidth
            autoComplete="company"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="startDate"
            name="startDate"
            label="Start Date"
            fullWidth
            autoComplete="start-date"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="endDate"
            name="endDate"
            label="End Date"
            fullWidth
            autoComplete="endDate"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            InputProps={{
                minRows: 5
            }}
            multiline
            id="jobDetail"
            name="jobDetail"
            label="Job Detail"
            fullWidth
            autoComplete="job-detail"
            variant="standard"
          />
        </Grid>
      </Grid>
    </Fragment>
        </>
}

export default Education;
