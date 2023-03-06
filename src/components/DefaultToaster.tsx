import { FunctionComponent } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';

interface IToasterProps {
  setOpen: Function
  isOpen: boolean
  severity: 'success' | 'error' | 'warning' | 'info'
  message: string
}

const DefaultToaster: FunctionComponent<IToasterProps> = ({
  setOpen,
  isOpen,
  severity,
  message
}) => {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isOpen} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DefaultToaster;


