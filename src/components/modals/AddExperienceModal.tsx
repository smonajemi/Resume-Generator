import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface IAddExperienceModalProps {
    isView: boolean
    handleClose: any
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const AddExperienceModal: FunctionComponent<IAddExperienceModalProps> = ({isView, handleClose }) => {
    return (
    
            <Box>
 
            <Dialog open={isView} onClose={handleClose}>
        <DialogTitle>Your Experience</DialogTitle>
        <DialogContent>
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
 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
            </Box>
    
    
    );
};

export default AddExperienceModal;
