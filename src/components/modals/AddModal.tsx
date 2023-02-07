import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid, TextField
} from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
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
  isEdit: boolean
  setEdit: Function
  setOpen: Function
  isOpen: boolean
}

const AddModal: FunctionComponent<IAddModalProps> = ({
  isView,
  handleClose,
  jobExperience,
  setView,
  onAdd,
  activeStep,
  education,
  isEdit,
  setEdit,
  setOpen,
  isOpen
}) => {

  const [newExperience, setNewExperience] = useState(jobExperience);
  const [newEducation, setNewEducation] = useState(education);
  const handleAddExperience = (e: any, type: string) => {
    switch (type) {
      case 'jobTitle':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        break;
      case 'company':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        break;
      case 'city':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        break;
      case 'province':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value?.toUpperCase() });
        break;
      case 'startDate':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        break;
      case 'endDate':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        break;
      case 'jobDetail':
        let temp = new Array()
        temp = (e?.target?.value[0]?.toUpperCase() + e?.target?.value?.substring(1))?.split(",")
        setNewExperience({ ...newExperience, [e?.target?.name]: temp });
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
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value?.toUpperCase() });
        break;

    }
  };
  useEffect(() => {
    if (jobExperience) {
      setNewExperience({ ...jobExperience });

    }  else {
      setNewExperience(undefined as any);
    } 
    if (education) {
      setNewEducation({ ...education });
    } else {
      setNewEducation(undefined as any);
    }
  }, [jobExperience, education]);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    switch (activeStep) {
      case 1:
        if (!newExperience?.jobTitle || !newExperience?.city || !newExperience?.company || !newExperience?.province || !newExperience?.startDate || !newExperience?.jobDetail) {
          setOpen(true);
          return;
        } else {
          onAdd(newExperience);
          setNewExperience(undefined as any);
          setView(false);
          setOpen(false);
        }
        break;
      case 2:
        if (!newEducation?.program || !newEducation?.city || !newEducation?.schoolName || !newEducation?.province || !newEducation?.startDate) {
          setOpen(true);
          return;
        } else {
          onAdd(newEducation);
          setNewEducation(undefined as any);
          setView(false);
          setOpen(false);
        }
      break;
      default:
        break;
    }

  };

  return (
    <>

      {activeStep === 1 && (
        <Box component="form" noValidate onChange={e => handleAddExperience(e, (e?.target as HTMLTextAreaElement)?.name)} sx={{ mt: 3 }}>

          <Dialog open={isView} onClose={() => {handleClose(); setEdit(false)}}>
            <DialogTitle>Your Experience</DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
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
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="company"
                    name="company"
                    label="Company"
                    fullWidth
                    autoComplete="company"
                    variant="standard"
                    value={newExperience?.company || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="city"
                    variant="standard"
                    value={newExperience?.city || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="province"
                    name="province"
                    label="Province/Territory"
                    fullWidth
                    variant="standard"
                    inputProps={{ maxLength: 2 }}
                    value={newExperience?.province || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="startDate"
                    name="startDate"
                    label="Start Date"
                    fullWidth
                    autoComplete="start-date"
                    variant="standard"
                    value={newExperience?.startDate || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    id="endDate"
                    name="endDate"
                    label="End Date"
                    fullWidth
                    autoComplete="endDate"
                    variant="standard"
                    value={newExperience?.endDate || ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
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
                    value={newExperience?.jobDetail || ""}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              {isEdit ? (
                <>
              <Button onClick={() => {handleClose(); setEdit(false)}}>Cancel</Button>
              <Button onClick={() => {
                onAdd(newExperience);
                setNewExperience(undefined as any);
                setView(false);
              }}>Save</Button>
                </>
              ) : 
              <>
              <Button onClick={() => {setNewExperience(undefined as any); handleClose(); setEdit(false)}}>Cancel</Button>
              <Button onClick={(e: any) => handleClick(e)}>Add</Button>
              </>
              }

            </DialogActions>
          </Dialog>
        </Box>
      )}

      {activeStep === 2 && (
        <Box component="form" noValidate onChange={e => handleAddEducation(e, (e?.target as HTMLTextAreaElement)?.name)} sx={{ mt: 3 }}>
      <Dialog open={isView} onClose={() => {handleClose(); setEdit(false)}}>
            <DialogTitle>Your Education</DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="schoolName"
                    name="schoolName"
                    label="School Name"
                    fullWidth
                    autoComplete="school-name"
                    variant="standard"
                    value={newEducation?.schoolName || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="program"
                    name="program"
                    label="Program"
                    fullWidth
                    autoComplete="program"
                    variant="standard"
                    value={newEducation?.program || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="city"
                    variant="standard"
                    value={newEducation?.city || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="province"
                    name="province"
                    label="Province/Territory"
                    fullWidth
                    variant="standard"
                    inputProps={{ maxLength: 2 }}
                    value={newEducation?.province || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="startDate"
                    name="startDate"
                    label="Start Date"
                    fullWidth
                    autoComplete="start-date"
                    variant="standard"
                    value={newEducation?.startDate || ""}
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
                    value={newEducation?.endDate || ""}
                  />
                </Grid>

              </Grid>
            </DialogContent>
            <DialogActions>
            {isEdit ? (
                <>
              <Button onClick={() => {handleClose(); setEdit(false)}}>Cancel</Button>
              <Button onClick={() => {
                onAdd(newEducation);
                setNewEducation(undefined as any);
                setView(false);
                setEdit(false)
              }}>Save</Button>
                </>
              ) : 
              <>
              <Button onClick={() => {setNewEducation(undefined as any); handleClose(); setEdit(false)}}>Cancel</Button>
              <Button onClick={(e: any) => handleClick(e)}>Add</Button>
              </>
              }
            </DialogActions>
          </Dialog>
        </Box>
      )}</>

  );
};

export default AddModal;
