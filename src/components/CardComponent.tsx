import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  CardActionArea,
} from "@mui/material";
import { FunctionComponent } from "react";
import { EducationTypes } from "../types/Education.types";
import { JobExperience } from "../types/jobExperience.types";

interface ICardComponentProps {
  jobExperience?: JobExperience;
  education?: EducationTypes;
  onEdit: Function;
  onDelete: Function;
  activeStep: number;
  setEdit: Function
}

const CardComponent: FunctionComponent<ICardComponentProps> = ({
  jobExperience,
  education,
  onEdit,
  onDelete,
  activeStep,
  setEdit
}) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 150 }}>
      <CardActionArea>
        <CardContent>
          {activeStep === 1 && (
            <>
              <Typography gutterBottom variant="subtitle1" component="div">
                {jobExperience?.company}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {jobExperience?.jobTitle}
              </Typography>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography gutterBottom variant="subtitle1" component="div">
                {education?.schoolName}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {education?.program}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {activeStep === 1 && (
          <>
            <Button
              size="small"
              color="error"
              onClick={() => onDelete(jobExperience?.key)}
            >
              Delete
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => {onEdit(jobExperience?.key); setEdit(true)}}
            >
              Edit
            </Button>
          </>
        )}
        {activeStep === 2 && (
          <>
            <Button
              size="small"
              color="error"
              onClick={() => onDelete(education?.key)}
            >
              Delete
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => onEdit(education?.key)}
            >
              Edit
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};
export default CardComponent;
