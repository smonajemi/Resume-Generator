import { Typography, Grid, Box } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { JobExperience } from "../types/jobExperience.types";
import CardComponent from "./CardComponent";
import Center from "./utils/Center";

interface IExperienceProps {
  jobExperience: JobExperience | any
  onEdit: Function
  onDelete: Function
  activeStep: number
}

const Experience: FunctionComponent<IExperienceProps> = ({
  jobExperience,
  onEdit,
  onDelete,
  activeStep
}) => {

  return <>
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Your Experience
      </Typography>

      <Center>
        <Box >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {jobExperience?.map((value: JobExperience) => (
              <Grid item xs={2} sm={4} md={6} key={value?.key}>
                <CardComponent jobExperience={value} onEdit={onEdit} onDelete={onDelete} activeStep={activeStep} />
              </Grid>

            ))}

          </Grid>
        </Box>
      </Center>

    </Fragment>
  </>
}

export default Experience;
