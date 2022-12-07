import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { CardList } from '../common/CardList';
import { Copyright } from '../common/Copyright';
import { ErrorNotification } from '../common/ErrorNotification';
import { PortfolioDialog } from '../common/PortfolioDialog';
import { IntradayChart } from '../portfolio/IntradayChart';
import { useGetPortfolioStocksQuery } from '../rtk-files/portfolioStocksApi';

const theme = createTheme();
export function Portfolio() {

  const { data: portfolioStocks, error, isLoading: portfolioLoading } = useGetPortfolioStocksQuery();
  const { portfolioDialog } = useSelector(state => state.portfolioDialog);

  return (
    <>
      {
        portfolioDialog ?
        <PortfolioDialog /> :
        <></>
      }
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: -6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ErrorNotification error={error} />
              {
                portfolioLoading ?
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container sx={{ mx: 40 }}>
                      <CircularProgress />
                    </Grid>
                  </Container> :
                portfolioStocks ?
                  <CardList cards={portfolioStocks.portfolio_stocks} type={'PORTFOLIO'} /> :
                <></>
              }
            </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        {<IntradayChart symbol={ `SPY` }/>}
      </ThemeProvider>
    </>
  );
}
