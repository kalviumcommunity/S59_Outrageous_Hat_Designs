import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Wishlist from '../Pages/Wishlist';

const HatCard = ({ hat }) => {
  const [isLiked, setIsLiked] = useState(hat.isLiked);

  const handleLikeToggle = async () => {
    try {
      const response = await fetch(`http://localhost:3000/crude-api/like/${hat._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsLiked(!isLiked);
      } else {
        console.error('Failed to update liked status');
      }
    } catch (error) {
      console.error('Error updating liked status:', error);
    }
  };

  const heartStyle = {
    color: isLiked ? 'red' : 'white',
  };

  return (<>
    <Card sx={{ maxWidth: 345, margin: 2, backgroundColor: '#F97623', color: '#FFFFFF', cursor: 'pointer' }}>
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
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="div">
              Size: {hat.size}
            </Typography>
            <IconButton aria-label="add to favorites"  onClick={handleLikeToggle}>
              <FavoriteIcon color="secondary" sx={{ right: '30px', color: 'white', ...heartStyle }} />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
  );
};

export default HatCard;
