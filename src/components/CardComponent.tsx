import { Box, CardContent, Typography, CardActions, Button, Card, CardActionArea } from '@mui/material';
import { FunctionComponent } from 'react';
import { JobExperience } from '../types/jobExperience.types';


interface ICardComponentProps {
jobExperience: JobExperience
setView: Function
onEdit: Function
onDelete: Function
}

const CardComponent: FunctionComponent<ICardComponentProps> = ({
  jobExperience,
  setView,
  onEdit,
  onDelete
}) => {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {jobExperience?.company}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {jobExperience?.jobTitle}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="error" onClick={() => onDelete(jobExperience?.key)}>Delete</Button>
      <Button size="small" color="primary" onClick={() =>  onEdit(jobExperience?.key)} >Edit</Button>
    </CardActions>
  </Card>
  );
}
export default CardComponent;
