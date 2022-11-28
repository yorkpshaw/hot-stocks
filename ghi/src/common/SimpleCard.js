import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

async function handleClick(e) {
  e.preventDefault();
  console.log('clicked');
}


export function SimpleCard() {
  return (
    <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Apple
          </Typography>
          <Typography variant="h5" component="div">
            AAPL
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            $150
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={handleClick} size="small"><TurnedInNotOutlinedIcon /></IconButton>
          <IconButton onClick={handleClick} size="small"><WorkOutlineOutlinedIcon /></IconButton>
        </CardActions>
      </Card>
  );
}
