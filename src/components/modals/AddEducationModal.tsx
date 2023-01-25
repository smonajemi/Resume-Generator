import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { FunctionComponent } from "react";

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
            {/* <Modal
            open={isView}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
      
      <Typography variant="h6" gutterBottom>
        Your Experience
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
   
            </Box>
            </Modal> */}

<Dialog open={isView} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
            </Box>
    
    
    );
};

export default AddExperienceModal;
