import { FunctionComponent, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { CoverLetterTypes } from '../types/coverLetter.types';
import { useApi } from './hooks/useApi';

interface ICoverLetterFormProps {
}

const CoverLetterForm: FunctionComponent<ICoverLetterFormProps> = () => {
    const [newCoverLetter, setNewCoverLetter] = useState<CoverLetterTypes>({});
    const {generatedCoverLetter} = useApi()
    const handleSubmission = (e: any, type: string) => {
        setNewCoverLetter({ ...newCoverLetter, [e?.target?.name]: e?.target?.value });
      };
    const handleCoverLetter = async () => {
        const test = await generatedCoverLetter(newCoverLetter as any)
        console.log('test', test)
    }

    return (
        <Box component="form" noValidate onChange={e => handleSubmission(e, (e?.target as HTMLTextAreaElement)?.name)}>
            <TextField
                label="Company name"
                value={newCoverLetter?.company}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Job title"
                value={newCoverLetter?.jobTitle}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Skills required"
                value={newCoverLetter?.skills}
                required
                fullWidth
                margin="normal"
            />
            <Button type="button" variant="contained" onClick={() => handleCoverLetter()}>
                Generate Cover Letter
            </Button>
        </Box>
    );
}

export default CoverLetterForm