import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { EducationTypes } from "../../types/Education.types";
import { JobExperience } from "../../types/jobExperience.types";

interface IAddModalProps {
  isView: boolean;
  handleClose: any;
  jobExperience: JobExperience
  education: EducationTypes
  setView: Function
  onAdd: Function
  activeStep: number
}

const AddModal: FunctionComponent<IAddModalProps> = ({
  isView,
  handleClose,
  jobExperience,
  setView,
  onAdd,
  activeStep,
  education
}) => {

  const [newExperience, setNewExperience] = useState(jobExperience);
  const [newEducation, setNewEducation] = useState(education);

  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [jobDetail, setJobDetail] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')

  const handleAddExperience = (e: any, type: string) => {
    switch (type) {
      case 'jobTitle':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        setJobTitle(e?.target?.value)
        break;
      case 'company':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        setCompany(e?.target?.value)
        break;
      case 'city':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        setCity(e?.target?.value)
        break;
      case 'province':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        setProvince(e?.target?.value)
        break;
      case 'startDate':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        setStartDate(e?.target?.value)
        break;
        case 'endDate':
          setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
          setEndDate(e?.target?.value)
          break;   
      case 'jobDetail':
        let temp = new Array()
        temp = e?.target?.value .split(",")
        setNewExperience({ ...newExperience, [e?.target?.name]: temp});
        setJobDetail(e?.target?.value)
        break;
    }
  };
  const handleAddEducation = (e: any, type: string) => {
    switch (type) {
      case 'schoolName':
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value });
      
        break;
      case 'program':
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value });
     
        break;
      case 'startDate':
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value });
      
        break;
      case 'endDate':
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value });
        break;
      case 'city':
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value });
     
        break;
        case 'province':
          setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value });
       
          break;   

    }
  };
  useEffect(() => {
    if (jobExperience) {
      setNewExperience({ ...jobExperience });

    }
    if (education) {
      setNewEducation({ ...education });
    }
  }, [jobExperience, education]);


  return (
<>

{activeStep === 1 && (
    <Box component="form" noValidate onChange={e => handleAddExperience(e, (e?.target as HTMLTextAreaElement)?.name)} sx={{ mt: 3 }}>
    
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
         value={newExperience?.jobTitle || ""}
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
         value={newExperience?.company}
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
         value={newExperience?.city}
       />
     </Grid>
     <Grid item xs={12} sm={6}>
       <TextField
         id="province"
         name="province"
         label="Province/Territory"
         fullWidth
         variant="standard"
         value={newExperience?.province}
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
         value={newExperience?.startDate}
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
         value={newExperience?.endDate}
       />
     </Grid>
     <Grid item xs={12}>
       <TextField
         required
         InputProps={{
           minRows: 5,
         }}
         multiline
         id="jobDetail"
         name="jobDetail"
         label="Job Detail"
         fullWidth
         autoComplete="job-detail"
         variant="standard"
         value={newExperience?.jobDetail}
       />
     </Grid>
   </Grid>
 </DialogContent>
 <DialogActions>
   <Button onClick={handleClose}>Cancel</Button>
   <Button onClick={() => {
     onAdd(newExperience);
     setNewExperience(undefined as any);
     setView(false);
   }}>Save</Button>
 </DialogActions>
</Dialog>
 </Box>
      )}
   
    {activeStep === 2 && (
      <Box component="form" noValidate onChange={e => handleAddEducation(e, (e?.target as HTMLTextAreaElement)?.name)} sx={{ mt: 3 }}>
      <Dialog open={isView} onClose={handleClose}>
      <DialogTitle>Your Education</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="schoolName"
              name="schoolName"
              label="School Name"
              fullWidth
              autoComplete="school-name"
              variant="standard"
              value={newEducation?.schoolName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="program"
              name="program"
              label="program"
              fullWidth
              autoComplete="program"
              variant="standard"
              value={newEducation?.program}
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
              value={newEducation?.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="province"
              name="province"
              label="Province/Territory"
              fullWidth
              variant="standard"
              value={newEducation?.province}
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
              value={newEducation?.startDate}
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
              value={newEducation?.endDate}
            />
          </Grid>
 
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => {
          onAdd(newEducation);
          setNewEducation(undefined as any);
          setView(false);
        }}>Save</Button>
      </DialogActions>
    </Dialog>
    </Box>
   )}</>
  
  );
};

export default AddModal;
