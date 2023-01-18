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
import { JobExperience } from "../../types/jobExperience.types";

interface IAddExperienceModalProps {
  isView: boolean;
  handleClose: any;
  setJobExperience?: Function;
  jobExperience: JobExperience
  setView: Function
  onAdd: Function
}

const AddExperienceModal: FunctionComponent<IAddExperienceModalProps> = ({
  isView,
  handleClose,
  setJobExperience,
  jobExperience,
  setView,
  onAdd
}) => {

  const [newExperience, setNewExperience] = useState(jobExperience);
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [jobDetail, setJobDetail] = useState('')

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
        case 'startDate':
          setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
          setStartDate(e?.target?.value)
          break;
        case 'jobDetail':
          setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
          setJobDetail(e?.target?.value)
          break;
      }
  };
  useEffect(() => {
    if (jobExperience) {
      setNewExperience({ ...jobExperience });
    }
  }, [jobExperience]);


  return (
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
  );
};

export default AddExperienceModal;
