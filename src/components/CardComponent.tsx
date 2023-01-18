import { Box, CardContent, Typography, CardActions, Button, Card, CardActionArea } from '@mui/material';
import * as React from 'react';

export default function CardComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Company Name
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Job Description
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Edit
      </Button>
    </CardActions>
  </Card>
  );
}