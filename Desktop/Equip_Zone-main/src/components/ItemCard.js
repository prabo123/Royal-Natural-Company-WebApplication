import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ItemCard = ({ date, name, image }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 80, height: 80 }}
        image={`/images/${image}`}
        alt={name}
      />
      <CardContent>
        <Typography variant="subtitle1">{date}</Typography>
        <Typography variant="h6">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
