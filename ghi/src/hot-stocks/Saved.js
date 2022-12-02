import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Copyright } from '../common/Copyright';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardList } from '../common/CardList';
import { CircularProgress } from '@mui/material';
import { SimpleCard } from '../common/SimpleCard';
import { useGetSavedStocksQuery } from '../rtk-files/savedStocksApi';
import { useGetSavedNewsItemsQuery } from '../rtk-files/savedNewsItemsApi';
import { PortfolioDialog } from '../common/PortfolioDialog';

// const card = {symbol: "York", name: "Onyx", cost_current: "300"}
// const cards = [card];

// SQL Database ---> ACLs/Query ---> Routers ---> RTK Slice ---> Components
/* Access data from get_saved_news_items and get_saved_stocks in RTK */

const theme = createTheme();

export function Saved() {

  const { data: savedNewsItemsData, error: savedNewsItemsError, isLoading: savedNewsItemsLoading } = useGetSavedNewsItemsQuery();
  const { data: savedStocksData,  error: savedStocksError, isLoading: savedStocksLoading } = useGetSavedStocksQuery();

  return (
    <>
    <PortfolioDialog />
    <Container maxWidth="sm">
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            {
                savedStocksLoading ?
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container sx={{ mx: 40 }}>
                      <CircularProgress />
                    </Grid>
                  </Container> :
                  savedStocksData ?
                    <CardList cards={savedStocksData.saved_stocks} /> :
                    <></>
              }
              {
                savedNewsItemsLoading ?
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container sx={{ mx: 40 }}>
                      <CircularProgress />
                    </Grid>
                  </Container> :
                  savedNewsItemsData ?
                    <CardList cards={savedNewsItemsData.news_items} /> :
                    <></>
              }

              {/* <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>

                  </CardContent>
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
    </>
  );
}
