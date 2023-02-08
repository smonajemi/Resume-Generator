import { FunctionComponent } from 'react';
import { Box, Snackbar } from '@mui/material';

interface IToasterProps {
  setOpen: Function
  isOpen: boolean
}

const ErrorToaster: FunctionComponent<IToasterProps> = ({
  setOpen,
  isOpen
}) => {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={() => handleClose()}
        message="Error: fields marked with asterisk are required."
      />
    </Box>
  );
};

export default ErrorToaster;
