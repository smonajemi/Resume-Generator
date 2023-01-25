import { Typography, Grid, Box } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { EducationTypes } from "../types/Education.types";
import CardComponent from "./CardComponent";
import Center from "./utils/Center";

interface IEducationProps {
  education: EducationTypes | any
  onEdit: Function
  onDelete: Function
  activeStep: number
}

const Education: FunctionComponent<IEducationProps> = ({
  education,
  onEdit,
  onDelete,
  activeStep
}) => {
console.log('education', education)
    return <>
         <Fragment>
      <Typography variant="h6" gutterBottom>
        Your Education
      </Typography>
              
<Center>
    <Box >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {education?.map((value: EducationTypes) => (
               <Grid item xs={2} sm={4} md={6} key={value?.key}>
               <CardComponent education={value} onEdit={onEdit} onDelete={onDelete} activeStep={activeStep}/>
          </Grid>
         
          ))}

      </Grid>
    </Box>
    </Center>

    </Fragment>
        </>
}

export default Education;
 