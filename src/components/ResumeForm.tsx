import {
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
} from "@mui/material";
import { Fragment, FunctionComponent, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import { PlaylistAdd } from "@mui/icons-material";
import Education from "./Education";
import { useForm } from "./hooks/useForm";
import AddExperienceModal from "./modals/AddExperienceModal";

interface IResumeFormProps {}

const steps = ["Personal Information", "Experience", "Education"];

const ResumeForm: FunctionComponent<IResumeFormProps> = () => {
  const {
    activeStep,
    setActiveStep,
    theme,
    handleNext,
    handleBack,
    setView,
    isView,
    handleCloseModal,
  } = useForm();

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInformation />;
      case 1:
        return <Experience activeStep={activeStep} setView={setView} />;
      case 2:
        return <Education />;
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
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, boxShadow:  "5px 10px #262626" }}
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
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                {getStepContent(activeStep)}
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                {activeStep === 1 && (
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
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? "Create PDF" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </Fragment>
            )}
          </Paper>
        </Container>
      </ThemeProvider>
      <AddExperienceModal isView={isView} handleClose={handleCloseModal}/>
    </>
  );
};

export default ResumeForm;
