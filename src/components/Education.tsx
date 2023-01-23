import { Typography, Grid, TextField, Button, Box } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import Center from "./utils/Center";

interface IEducationProps {

}

const Education: FunctionComponent<IEducationProps> = ({

}) => {

    return <>
         <Fragment>
      <Typography variant="h6" gutterBottom>
        Your Education
      </Typography>
              
<Center>
    <Box >
      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {jobEducation?.map((value: JobEducation) => (
               <Grid item xs={2} sm={4} md={6} key={value?.key}>
               <CardComponent jobEducation={value} onEdit={onEdit} onDelete={onDelete}/>
          </Grid>
         
          ))}

      </Grid> */}
    </Box>
    </Center>

    </Fragment>
        </>
}

export default Education;
 