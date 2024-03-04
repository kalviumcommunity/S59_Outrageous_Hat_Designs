import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const HatCard = ({ hat }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, backgroundColor: '#F97623', color: '#FFFFFF' }}>
      <CardMedia
        component="img"
        height="200"
        image={hat.imageURL}
        alt={hat.HatName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hat.HatName}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="div">
              Material: {hat.Material}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="div">
                Price: {hat.price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="div">
              Size: {hat.size}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HatCard;
