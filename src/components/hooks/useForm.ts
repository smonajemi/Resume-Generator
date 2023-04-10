import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { CoverLetterTypes } from "../../types/coverLetter.types";
import { EducationTypes } from "../../types/education.types";
import { JobExperience } from "../../types/jobExperience.types";
import { UserTypes } from "../../types/user.types";
import { useApi } from "./useApi";
import { useLocalStorage } from "./useLocalStorage";

export const useForm = () => {
  const { getItem, setItem, clearItem } = useLocalStorage();
  const [currentExperience, setCurrentExperience] = useState<
    JobExperience | any
  >();
  const [currentEducation, setCurrentEducation] = useState<
    EducationTypes | any
  >();
  const [currentUser, setCurrentUser] = useState<UserTypes | any>();
  const [currentCoverLetter, setCurrentCoverLetter] = useState<
    CoverLetterTypes | any
  >({
    company: "",
    jobTitle: "",
    skills: "",
    fullName: "",
  });

  const [isView, setView] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const handleCloseModal = () => setView(false);
  const [activeStep, setActiveStep] = useState(0);
  const theme = createTheme();
  const [isOpen, setOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isNextLoading, setIsNextLoading] = useState(false);
  const [progress, setProgress] = useState(10);
  const [showInputs, setShowInputs] = useState(false);
  const [coverLetterData, setCoverLetterData] = useState("");
  const [isValidated, setValidation] = useState(false);

  const steps = ["Personal Information", "Experience", "Education"];
  const capitalize = (string: string | any): string => {
    let words: string[] = string.split(" ");
    for (let i: number = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
  };

  const { correctGrammar, generatedCoverLetter } = useApi();
  return {
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
    isLoading,
    setIsLoading,
    showInputs,
    setShowInputs,
    coverLetterData,
    setCoverLetterData,
    steps,
    correctGrammar,
    generatedCoverLetter,
    isValidated, 
    setValidation,
    isNextLoading, 
    setIsNextLoading,
    progress, 
    setProgress,
    capitalize
  } as const;
};
