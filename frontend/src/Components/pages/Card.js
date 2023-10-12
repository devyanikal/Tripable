import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Card.css'

export default function CardTemplate(props) {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }} className='container1'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          className='imgCard'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#464947">
            {props.name}
          </Typography>
          <Typography variant="body2" color="#464947" height={45}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </div>
  );
}