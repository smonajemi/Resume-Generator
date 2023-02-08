import {
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { Fragment, FunctionComponent, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import { PlaylistAdd } from "@mui/icons-material";
import Education from "./Education";
import { useForm } from "./hooks/useForm";
import { JobExperience } from "../types/jobExperience.types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfGenerator from "./resume/PdfGenerator";
import { EducationTypes } from "../types/Education.types";
import { UserTypes } from "../types/user.types";
import AddModal from "./modals/AddModal";
import ErrorToaster from "./ErrorToaster";
import moment from "moment";


interface IResumeFormProps {
  jobExperience: JobExperience[];
  setJobExperience: Function;
  education: EducationTypes[];
  setEducation: Function
  user: UserTypes[]
  setUser: Function
}

const steps = ["Personal Information", "Experience", "Education"];

const ResumeForm: FunctionComponent<IResumeFormProps> = ({ jobExperience, setJobExperience, education, setEducation, user, setUser }) => {
  const {
    activeStep,
    theme,
    setView,
    isView,
    handleCloseModal,
    currentExperience,
    setCurrentExperience,
    currentEducation,
    setCurrentEducation,
    setCurrentUser,
    currentUser,
    setActiveStep,
    isEdit,
    setEdit,
    isOpen,
    setOpen,
    isChecked,
    handleChange,
    setChecked
  } = useForm();

  const onEdit = (key: string | undefined) => {
    switch (activeStep) {
      case 1:
        const editJobExperience = jobExperience?.find((x: any) => x.key === key);
        editJobExperience?.isChecked ? setChecked(true) : setChecked(false)
        setCurrentExperience(editJobExperience);
        setView(true);
        break;
      case 2:
        const editEducation = education?.find((x: any) => x.key === key);
        editEducation?.isChecked ? setChecked(true) : setChecked(false)
        setCurrentEducation(editEducation);
        setView(true);
        break;

      default:
        break;
    }

  };

  const onAdd = (value: any) => {
    switch (activeStep) {
      case 1:
        if (value?.key) {
          const index = jobExperience?.findIndex((x) => x.key === value.key);
          const newArray = jobExperience;
          newArray[index] = value;
          setJobExperience([...newArray]);
        } else {
          const uniqueKey = new Date().getTime().toString();
          const newDate = new Date().toDateString();
          setJobExperience([...jobExperience, { key: uniqueKey, date: newDate, ...value }]);
        }
        setCurrentExperience(undefined);
        break;
      case 2:

        if (value?.key) {
          const index = education?.findIndex((x) => x.key === value.key);
          const newEducationArray = education;
          newEducationArray[index] = value;
          setEducation([...newEducationArray]);
        } else {
          const uniqueKey = new Date().getTime().toString();
          const newDate = new Date().toDateString();
          setEducation([...education, { key: uniqueKey, date: newDate, ...value }]);
        }
        setCurrentEducation(undefined);
        break;
      default:
        break;
    }

  };

  const onAddUserInfo = (value: any) => {
    if (value?.key) {
      const index = user?.findIndex((x) => x.key === value.key);
      const newArray = user;
      newArray[index] = value;
      setUser([...newArray]);
    } else {

      const uniqueKey = new Date().getTime().toString();
      const newDate = new Date().toDateString();
      setUser([...user, { key: uniqueKey, date: newDate, ...value }]);
    }
    handleNext()
  };


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onDelete = (key: string | undefined) => {
    switch (activeStep) {
      case 1:
        const experienceListItem = jobExperience.filter((x) => x.key !== key);
        setJobExperience([...experienceListItem]);
        break;
      case 2:
        const educationListItem = education.filter((x) => x.key !== key);
        setEducation([...educationListItem]);
        break;
      default:
        break;
    }

  };

  useEffect(() => {
    if (!isEdit) {
      setCurrentExperience(undefined);
      setCurrentEducation(undefined);
    }
  }, [currentExperience, isEdit, currentEducation]);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!currentUser?.lastName || !currentUser?.city || !currentUser?.address || !currentUser?.postalCode || !currentUser?.summary) {
      setOpen(true);
      return;
    }
    if (!currentUser) {
      onAddUserInfo(currentUser)
      setCurrentExperience(undefined as any);
      setView(false);
      setOpen(false);
    } else { handleNext() }
  }
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInformation user={currentUser} setUser={setCurrentUser} />;
      case 1:
        return <Experience setEdit={setEdit} jobExperience={jobExperience} onEdit={onEdit} onDelete={onDelete} activeStep={activeStep} />;
      case 2:
        return <Education setEdit={setEdit} education={education} onEdit={onEdit} onDelete={onDelete} activeStep={activeStep} />;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, boxShadow: "5px 10px #262626" }}
          >
            <Typography component="h1" variant="h4" align="center">
              Resume Form
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Fragment>
                <Typography variant="h5" gutterBottom>
                  Hold on a sec...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <PDFDownloadLink document={<PdfGenerator experienceData={jobExperience} educationData={education} userData={currentUser} />} fileName={currentUser?.firstName?.concat(' ')?.concat(currentUser?.lastName) + ' - Resume ' + moment().year()}>
                    {({ loading }) => (loading ? <Box sx={{ mt: 3, ml: 1 }}><CircularProgress /></Box> : <Button sx={{ mt: 3, ml: 1 }} variant="contained">Download</Button>)}
                  </PDFDownloadLink>
                </Box>
              </Fragment>
            ) : (
              <Fragment>
                {getStepContent(activeStep)}
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {activeStep !== 0 && (
                      <Button onClick={() => setView(true)} sx={{ mt: 3, ml: 1 }}>
                        <PlaylistAdd />
                      </Button>
                    )}


                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={(e: any) => { activeStep === 0 ? handleClick(e) : handleNext() }}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>

                  </Box>
                </Box>
              </Fragment>
            )}
          </Paper>
        </Container>
      </ThemeProvider>
      <AddModal isChecked={isChecked} handleChange={handleChange} setChecked={setChecked} isOpen={isOpen} setOpen={setOpen} setEdit={setEdit} isEdit={isEdit} isView={isView} handleClose={handleCloseModal} jobExperience={currentExperience} setView={setView} onAdd={onAdd} education={currentEducation} activeStep={activeStep} />
      <ErrorToaster setOpen={setOpen} isOpen={isOpen} />
    </>
  );
};

export default ResumeForm;
