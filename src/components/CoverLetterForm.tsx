import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { CoverLetterTypes } from '../types/coverLetter.types';

import { UserTypes } from '../types/user.types';

interface ICoverLetterFormProps {
  coverLetter: CoverLetterTypes
  userData: UserTypes
  setCoverLetter: any
  showInputs: boolean
}

const CoverLetterForm = ({ userData, coverLetter, setCoverLetter, showInputs }: ICoverLetterFormProps) => {
      
    const handleSubmission = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoverLetter({ ...coverLetter, [e.target.name]: e.target.value, skills: userData?.technicalSkill, fullName: `${userData?.firstName} ${userData?.lastName}` });
    };
  
    return (
      <Box component="form" noValidate onChange={(e:any)=> handleSubmission(e)}>
        <TextField
          label="Company name"
          name="company"
          value={coverLetter?.company}
          required
          fullWidth
          margin="normal"
          disabled={showInputs}
        />
        <TextField
          label="Job title"
          name="jobTitle"
          value={coverLetter?.jobTitle}
          required
          fullWidth
          margin="normal"
          disabled={showInputs}
        />
      </Box>
    );
  };
  
  export default CoverLetterForm;