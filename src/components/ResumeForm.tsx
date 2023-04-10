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
  Switch
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
import { EducationTypes } from "../types/education.types";
import { UserTypes } from "../types/user.types";
import AddModal from "./modals/AddModal";
import DefaultToaster from "./DefaultToaster";
import CoverLetterForm from "./CoverLetterForm";
import CustomLoader from "./CustomLoader";

interface IResumeFormProps {
  jobExperience: JobExperience[];
  setJobExperience: Function;
  education: EducationTypes[];
  setEducation: Function;
  user: UserTypes[];
  setUser: Function;
}

const ResumeForm: FunctionComponent<IResumeFormProps> = ({
  jobExperience,
  setJobExperience,
  education,
  setEducation,
  user,
  setUser,
}) => {
  const {
    isView,
    setView,
    handleCloseModal,
    activeStep,
    setActiveStep,
    theme,
    currentExperience,
    setCurrentExperience,
    currentUser,
    setCurrentUser,
    currentEducation,
    setCurrentEducation,
    isEdit,
    setEdit,
    isOpen,
    setOpen,
    isChecked,
    handleChange,
    setChecked,
    currentCoverLetter,
    setCurrentCoverLetter,
    steps,
    isLoading,
    setIsLoading,
    showInputs,
    setShowInputs,
    coverLetterData,
    setCoverLetterData,
    correctGrammar,
    generatedCoverLetter,
    isValidated, 
    setValidation,
    isNextLoading, 
    setIsNextLoading,
    progress, 
    setProgress,
    capitalize
  } = useForm();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const handleNext = async () => {
    try {
      await new Promise<void>(async resolve => {
        setIsNextLoading(true)
        const updatedUser = {
          ...currentUser,
          summary: await correctGrammar(currentUser?.summary),
        };
        setCurrentUser(updatedUser);
        resolve();
      });
  
      setActiveStep(activeStep + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsNextLoading(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onEdit = (key: string | undefined) => {
    switch (activeStep) {
      case 1:
        const editJobExperience = jobExperience?.find(
          (x: any) => x.key === key
        );
        editJobExperience?.isChecked ? setChecked(true) : setChecked(false);
        setCurrentExperience(editJobExperience);
        setView(true);
        break;
      case 2:
        const editEducation = education?.find((x: any) => x.key === key);
        editEducation?.isChecked ? setChecked(true) : setChecked(false);
        setCurrentEducation(editEducation);
        setView(true);
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
          setJobExperience([
            ...jobExperience,
            { key: uniqueKey, date: newDate, ...value },
          ]);
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
          setEducation([
            ...education,
            { key: uniqueKey, date: newDate, ...value },
          ]);
        }
        setCurrentEducation(undefined);
        break;
      default:
        break;
    }
  };

  const onAddUserInfo = async (value: any) => {
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
    handleNext();
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

  const handleSwitchChange = async (event: any) => {
    setShowInputs(event.target.checked);
    setIsLoading(true);
    let data = "";
    if (event.target.checked) {
      try {
        data = (await generatedCoverLetter({ ...currentCoverLetter })) ?? "";
      } catch (error) {
        console.error(error);
        setCoverLetterData("");
      }
    }
    setCoverLetterData(data ?? "");
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isEdit) {
      setCurrentExperience(undefined);
      setCurrentEducation(undefined);
    }
  }, [currentExperience, isEdit, currentEducation]);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!currentUser?.firstName || !currentUser?.lastName || !currentUser?.city || !currentUser?.address || !currentUser?.LinkedIn || !currentUser?.postalCode || !currentUser?.summary || !currentUser?.phoneNumber || !currentUser?.email) {
      setOpen(true);
      return;
    }
    if (!isValidated) {
      return
    }
    if (!currentUser) {
      onAddUserInfo(currentUser);
      setCurrentExperience(undefined as any);
      setView(false);
      setOpen(false);
    } else {
      handleNext();
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <PersonalInformation user={currentUser} setUser={setCurrentUser} isValidated={isValidated} setValidation={setValidation}/>
        );
      case 1:
        return (
          <Experience
            setEdit={setEdit}
            jobExperience={jobExperience}
            onEdit={onEdit}
            onDelete={onDelete}
            activeStep={activeStep}
          />
        );
      case 2:
        return (
          <Education
            setEdit={setEdit}
            education={education}
            onEdit={onEdit}
            onDelete={onDelete}
            activeStep={activeStep}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <>
      <Box
        position="relative"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {isLoading ? (
            <CircularProgress disableShrink />
          ) : (
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    my: { xs: 3, md: 6 },
                    p: { xs: 2, md: 3 },
                    boxShadow: "5px 10px #262626",
                  }}
                >
                  <Typography component="h1" variant="h4" align="center">
                    ResumeGenie
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
                      <CoverLetterForm
                        coverLetter={currentCoverLetter}
                        setCoverLetter={setCurrentCoverLetter}
                        userData={currentUser}
                        showInputs={showInputs}
                      />
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", justifyContent: "flex-start" }}
                        >
                          <Box sx={{ mt: 3, ml: 1 }}>
                            <Typography component="span">Add CV</Typography>
                            <Switch
                              disabled={
                                (!currentCoverLetter?.company ||
                                  !currentCoverLetter?.jobTitle)
                              }
                              checked={showInputs}
                              onChange={handleSwitchChange}
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                          {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                              Back
                            </Button>
                          )}
                          <PDFDownloadLink
                            document={
                              <PdfGenerator
                                experienceData={jobExperience}
                                educationData={education}
                                userData={currentUser}
                                coverLetter={coverLetterData}
                                capitalize={capitalize}
                              />
                            }
                            fileName={
                              `${currentUser?.firstName} ${currentUser?.lastName}`.toUpperCase() +
                              ` - ${currentCoverLetter?.company} (Resume) - ${currentCoverLetter?.jobTitle
                              }`
                            }
                          >
                            {({ loading }) =>
                              loading && !coverLetterData ? (
                                <Box sx={{ mt: 3, ml: 1 }}>
                                  <CircularProgress />
                                </Box>
                              ) : (
                                <Button
                                  sx={{ mt: 3, ml: 1 }}
                                  variant="contained"
                                  disabled={
                                    !showInputs &&
                                    (!currentCoverLetter?.company ||
                                      !currentCoverLetter?.jobTitle)
                                  }
                                >
                                  Download
                                </Button>
                              )
                            }
                          </PDFDownloadLink>
                        </Box>
                      </Box>
                    </Fragment>
                  ) : (
                    <Fragment>
                      {getStepContent(activeStep)}
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", justifyContent: "flex-start" }}
                        >
                          {activeStep !== 0 && (
                            <Button
                              onClick={() => setView(true)}
                              sx={{ mt: 3, ml: 1 }}
                            >
                              <PlaylistAdd />
                            </Button>
                          )}
                        </Box>

                        <Box
                          sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                          {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                              Back
                            </Button>
                          )}
                  
                          <Button
                          variant="contained"
                          onClick={(e: any) => {
                            activeStep === 0 ? handleClick(e) : handleNext();
                          }}
                          disabled={isNextLoading}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          {isNextLoading ?  <CustomLoader value={progress} size={24}/> : 'Next'}
                        </Button>
                       
                        
                        </Box>
                      </Box>
                    </Fragment>
                  )}
                </Paper>
              </Container>
            </ThemeProvider>
          )}
        </Box>
      </Box>

      <AddModal
        isChecked={isChecked}
        handleChange={handleChange}
        setChecked={setChecked}
        isOpen={isOpen}
        setOpen={setOpen}
        setEdit={setEdit}
        isEdit={isEdit}
        isView={isView}
        handleClose={handleCloseModal}
        jobExperience={currentExperience}
        setView={setView}
        onAdd={onAdd}
        education={currentEducation}
        activeStep={activeStep}
      />
      <DefaultToaster setOpen={setOpen} isOpen={isOpen} severity="error" message="Error: fields marked with asterisk are required."/>
    </>
  );
};

export default ResumeForm;
