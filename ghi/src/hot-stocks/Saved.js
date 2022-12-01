import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Copyright } from '../common/Copyright';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SimpleCard } from '../common/SimpleCard';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export function Saved(props) {
  return (
    <Container maxWidth="sm">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
      </AppBar> */}
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Saved
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Here lies a whole bunch of text that will be replaced.
            </Typography>
          </Container>
        </Box>
        <CardList />

          {/* news_items
          saved_stocks */}

        {/* <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <CardList />
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}

      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Currently In Development.
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
    </Container>
  );
}


// import { valueToPercent } from '@mui/base';
// import * as React from 'react';
// import { Container } from '@mui/material';


// export function Saved(props) {

//     return (
//         <Container maxWidth="sm">
//         <div>
//             savedsavedsavedsavedsavedsavedsavedsavedsavedsaved
//         </div>
//         </Container>
//       );
// }

// 9 boxes on the page (get)
// all boxes will have a delete button on the bottom right
// each stock box will have Symbol, current value
// each news box will have the news title and posted date
// do the boxes still need a plus sign button? it'll be edit
// connect this component to the back end for saved list
