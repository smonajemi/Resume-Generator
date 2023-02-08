import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Grid, TextField
} from "@mui/material";
import moment from "moment";
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
  isChecked: boolean
  handleChange: any
  setChecked: Function
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
  isOpen,
  isChecked,
  handleChange,
  setChecked
}) => {

  const [newExperience, setNewExperience] = useState(jobExperience);
  const [newEducation, setNewEducation] = useState(education);
  const handleAddExperience = (e: any, type: string) => {
    switch (type) {
      case 'isChecked':
        setNewExperience({ ...newExperience, [e?.target?.name]: !isChecked });
        break;
      case 'province':
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value?.toUpperCase() });
        break;
      case 'jobDetail':
        let temp = []
        temp = (e?.target?.value[0]?.toUpperCase() + e?.target?.value?.substring(1))?.split(",")
        setNewExperience({ ...newExperience, [e?.target?.name]: temp });
        break;
      default:
        setNewExperience({ ...newExperience, [e?.target?.name]: e?.target?.value });
        break;
    }
  };
  const handleAddEducation = (e: any, type: string) => {
    switch (type) {
      case 'isChecked':
        setNewEducation({ ...newEducation, [e?.target?.name]: !isChecked });
        break;
      case 'province':
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value?.toUpperCase() });
        break;
      default:
        setNewEducation({ ...newEducation, [e?.target?.name]: e?.target?.value });
        break;
    }
  };

  useEffect(() => {
    if (jobExperience) {
      setNewExperience({ ...jobExperience });
    } else {
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
          setChecked(false)
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
          setChecked(false)
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
          <Dialog open={isView} onClose={() => { handleClose(); setEdit(false); setChecked(false)}}>
            <DialogContent>
              <Grid container spacing={3} style={{padding: 10}}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="jobTitle"
                    name="jobTitle"
                    label="Job Title"
                    fullWidth
                    autoComplete="job-title"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    type="date"
                    autoComplete="start-date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={newExperience?.startDate || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display='flex'>
                    <Checkbox
                    name="isChecked"
                    id='isChecked'
                    checked={isChecked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                    <TextField
                      inputProps={{ style: { textTransform: 'capitalize' } }}
                      id="endDate"
                      name="endDate"
                      label="End Date"
                      fullWidth
                      type="date"
                      autoComplete="endDate"
                      variant="outlined"
                      disabled={newExperience?.isChecked}
                      InputLabelProps={{ shrink: true }}
                      value={newExperience?.endDate || ""}
                    />
                    </Box>
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
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={newExperience?.jobDetail || ""}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              {isEdit ? (
                <>
                  <Button onClick={() => { handleClose(); setEdit(false) }}>Cancel</Button>
                  <Button onClick={() => {
                    onAdd(newExperience);
                    setNewExperience(undefined as any);
                    setView(false);
                  }}>Save</Button>
                </>
              ) :
                <>
                  <Button onClick={() => { setNewExperience(undefined as any); handleClose(); setEdit(false) }}>Cancel</Button>
                  <Button onClick={(e: any) => handleClick(e)}>Add</Button>
                </>
              }

            </DialogActions>
          </Dialog>
        </Box>
      )}

      {activeStep === 2 && (
        <Box component="form" noValidate onChange={e => handleAddEducation(e, (e?.target as HTMLTextAreaElement)?.name)} sx={{ mt: 3 }}>
          <Dialog open={isView} onClose={() => { handleClose(); setEdit(false); setChecked(false) }}>
           
            <DialogContent>
              <Grid container spacing={3} style={{padding: 10}}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { textTransform: 'capitalize' } }}
                    required
                    id="schoolName"
                    name="schoolName"
                    label="School Name"
                    fullWidth
                    autoComplete="school-name"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    type="date"
                    autoComplete="start-date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={newEducation?.startDate || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Box display='flex'>
                  <Checkbox
                    checked={newEducation?.isChecked}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
               <TextField
                    id="endDate"
                    name="endDate"
                    label="End Date"
                    fullWidth
                    type="date"
                    autoComplete="endDate"
                    variant="outlined"
                    disabled={newEducation?.isChecked}
                    InputLabelProps={{ shrink: true }}
                    value={newEducation?.endDate || ""}
                  />
                    </Box>
                </Grid>

              </Grid>
            </DialogContent>
            <DialogActions>
              {isEdit ? (
                <>
                  <Button onClick={() => { handleClose(); setEdit(false); setChecked(false)}}>Cancel</Button>
                  <Button onClick={() => {
                    onAdd(newEducation);
                    setNewEducation(undefined as any);
                    setView(false);
                    setEdit(false)
                  }}>Save</Button>
                </>
              ) :
                <>
                  <Button onClick={() => { setNewEducation(undefined as any); handleClose(); setEdit(false); setChecked(false) }}>Cancel</Button>
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
