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
  setEdit: Function
}

const Education: FunctionComponent<IEducationProps> = ({
  education,
  onEdit,
  onDelete,
  activeStep,
  setEdit
}) => {
  return <>
    <Fragment>
      <Center>
        <Box >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {education && education?.map((value: EducationTypes) => (
                value?.schoolName && (
                  <Grid item xs={2} sm={4} md={6} key={value?.key}>
                  <CardComponent setEdit={setEdit} education={value} onEdit={onEdit} onDelete={onDelete} activeStep={activeStep} />
                </Grid>
                )
            ))}
          </Grid>
        </Box>
      </Center>

    </Fragment>
  </>
}

export default Education;
