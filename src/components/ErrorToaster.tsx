import { FunctionComponent } from 'react';
import { Box, makeStyles, Snackbar } from '@mui/material';

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface IToasterProps {
  setOpen: Function
  isOpen: boolean
}

const ErrorToaster: FunctionComponent<IToasterProps> = ({
  setOpen,
  isOpen
}) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
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
