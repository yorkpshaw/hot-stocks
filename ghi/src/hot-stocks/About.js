import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export function About(props) {
  return (
    <Card sx={{ minWidth: 1000 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


// export function About(props) {

//   return (
//     <Container maxWidth="sm">
//     <div>
//       aboutaboutaboutaboutaboutaboutaboutabout
//     </div>
//     </Container>
//   );
// }


// Logo in a box at center of page
// Description right below
// Ask group what logo and description will look like
// LoginForm - import { deepOrange } from '@mui/material/colors';
// import Typography from '@mui/material/Typography';
// lines 60s
