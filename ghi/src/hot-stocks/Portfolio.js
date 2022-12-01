import { useState, useEffect, useSelector } from 'react';
import * as React from 'react';
import { portfolioStocksApi, useGetPortfolioStocksQuery } from '../rtk-files/portfolioStocksApi';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import QuoteAndChart from '../portfolio/QuoteAndChart';
import { getTotalPortfolioValue } from '../portfolio/GetTotalPortfolioValue';

const theme = createTheme();

export function Portfolio(props) {
  const { portfolio } = useSelector(state => state.local);
  const [getTotalPortfolioValue, setTotalPortfolioValue] = useState(0);

  // useEffect(() => {
  //     if(portfolio.length > 0) {
  //         setTotalPortfolioValue(getTotalPortfolioValue(portfolio));
  //     }
  // }, [portfolio]);

  useEffect(() => {
    if (portfolio.length > 0) {
      setTotalPortfolioValue(getTotalPortfolioValue(portfolio));
    }
  }, [portfolio]);


  //   if (isLoading) {
  //     return (
  //       <CircularProgress color="inherit" />
  //     );
  //   }

  return (
    <>
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
                  <CardList cards={portfolioStocks.portfolio_stocks} /> :
                  <></>
            }

          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

//     <div>
//       <Alert variant="outlined" severity="error">
//                 {error}
//             </Alert>
//             <div>
//                 {data.portfolioStocks.map(portfolioStock => {
//                     <p key={portfolioStock.id}>
//                         {portfolioStock.symbol}
//                     </p>
//                 })}
//             </div>
//     </div>
//   );
// }
