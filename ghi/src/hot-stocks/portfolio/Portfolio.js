import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { CardList } from '../../common/CardList';
import { Copyright } from '../../common/Copyright';
import { ErrorNotification } from '../../common/ErrorNotification';
import { PortfolioDialog } from '../../common/PortfolioDialog';
import { useGetPortfolioStocksQuery } from '../../rtk-files/portfolioStocksApi';
import { PortfolioValue } from './PortfolioValue';

const theme = createTheme();

export function Portfolio() {

  const { data: portfolioStocks, error, isLoading: portfolioLoading } = useGetPortfolioStocksQuery();
  const { portfolioDialog } = useSelector(state => state.portfolioDialog);
  const { queries } = useSelector(state => state.stocks);
  const portfolioStocksSymbols = portfolioStocks?.portfolio_stocks?.map((stock) => (stock.symbol));

  const portfolioStocksWithCostCurrentArray = queries[`getStocks(undefined)`]?.data?.stocks?.filter(element => portfolioStocksSymbols?.includes(element.symbol));
  const portfolioStocksCombinedData = portfolioStocksWithCostCurrentArray.map((item, i) => Object.assign({}, item, portfolioStocks?.portfolio_stocks[i]));
  const portfolioStocksCostCurrent = portfolioStocksCombinedData.map((stock) => stock.num_shares * stock.cost_current);
  const portfolioStocksCostBasis = portfolioStocksCombinedData.map((stock) => stock.num_shares * stock.cost_basis);

  const portfolioCostCurrent = portfolioStocksCostCurrent?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const portfolioCostBasis = portfolioStocksCostBasis?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );



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
            }}>
              {
                portfolioStocks?.portfolio_stocks ?
                portfolioStocksSymbols ?
                portfolioCostBasis && portfolioCostCurrent ?
                <PortfolioValue portfolioCostBasis={portfolioCostBasis} portfolioCostCurrent={portfolioCostCurrent} /> :
                <></> :
                <></> :
                <></>
              }
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
      </ThemeProvider>
    </>
  );
}
