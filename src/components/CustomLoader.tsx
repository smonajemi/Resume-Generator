import { Box, CircularProgress, CircularProgressProps, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface CustomLoaderProps extends CircularProgressProps {
  value: number;
}

export const CustomLoader: FunctionComponent<CustomLoaderProps> = (props: any) => {
  const { value, ...circularProgressProps } = props;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...circularProgressProps} value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="white">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};



export default CustomLoader;