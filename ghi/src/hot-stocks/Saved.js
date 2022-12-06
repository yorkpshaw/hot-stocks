import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Copyright } from '../common/Copyright';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardList } from '../common/CardList';
import { CircularProgress } from '@mui/material';
import { useGetSavedStocksQuery } from '../rtk-files/savedStocksApi';
import { useGetSavedNewsItemsQuery } from '../rtk-files/savedNewsItemsApi';
import { PortfolioDialog } from '../common/PortfolioDialog';
import { useSelector } from 'react-redux';

// SQL Database ---> ACLs/Query ---> Routers ---> RTK Slice ---> Components

const theme = createTheme();

export function Saved() {

  const { data: savedNewsItemsData, error: savedNewsItemsError, isLoading: savedNewsItemsLoading } = useGetSavedNewsItemsQuery();
  const { data: savedStocksData,  error: savedStocksError, isLoading: savedStocksLoading } = useGetSavedStocksQuery();
  const { portfolioDialog } = useSelector(state => state.portfolioDialog);

  return (
    <>
      {
        portfolioDialog ?
        <PortfolioDialog /> :
        <></>
      }
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
                    <CardList cards={savedStocksData.saved_stocks} type='SAVED'/> :
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
                    <CardList cards={savedNewsItemsData.news_items} type='SAVED' /> :
                    <></>
              }
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
