import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

 function Steps(props) {
  return (

    <Box
        sx={{
          boxShadow: 13,
          
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',    
        }}
      >
        
      

    <Card sx={{ maxWidth: 275 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.image}
        />
        <CardContent>
          <Typography style={{fontFamily:'Courier Prime'}} gutterBottom variant="h5" component="div">
            {props.step}
          </Typography>
          <Typography style={{fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
            {props.instruction}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  );
}

export default Steps;