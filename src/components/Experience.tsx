import { PlaylistAdd } from "@mui/icons-material";
import { Typography, Grid, TextField, Button, Box } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import CardComponent from "./CardComponent";
import Center from "./utils/Center";

interface IExperienceProps {
  activeStep: number
  setView: Function
}

const Experience: FunctionComponent<IExperienceProps> = ({
  activeStep,
  setView
}) => {
    return <>
         <Fragment>
      <Typography variant="h6" gutterBottom>
        Your Experience
      </Typography>
              
<Center>
    <Box >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
               <CardComponent />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Center>

    </Fragment>
        </>
}

export default Experience;
 