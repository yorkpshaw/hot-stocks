import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { CardList } from '../common/CardList';
import { Copyright } from '../common/Copyright';
import { SmallLoading } from '../common/Loading';
import { NoItems } from '../common/NoItems';
import { PortfolioDialog } from '../common/PortfolioDialog';
import { useGetSavedNewsItemsQuery } from '../rtk-files/savedNewsItemsApi';
import { useGetSavedStocksQuery } from '../rtk-files/savedStocksApi';

const theme = createTheme();

export function Saved() {

  const { data: savedNewsItemsData, isLoading: savedNewsItemsLoading } = useGetSavedNewsItemsQuery();
  const { data: savedStocksData, isLoading: savedStocksLoading } = useGetSavedStocksQuery();
  const { portfolioDialog } = useSelector(state => state.portfolioDialog);

  // console.log(savedStocksData?.saved_stocks.filter(stock => stock.preference) == false);
  // console.log(savedStocksData?.saved_stocks);

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
          {
            savedStocksLoading || savedNewsItemsLoading ?
              <Box
                component="main"
                sx={{ flexGrow: 2, p: 3 }}>
                <SmallLoading />
              </Box> :
              savedStocksData?.saved_stocks?.filter(stock => stock.preference) || savedNewsItemsData?.news_items?.filter(newsItem => newsItem.preference) ?
                <CardList cards={savedStocksData?.saved_stocks?.filter(stock => stock.preference).concat(savedNewsItemsData?.news_items.filter(newsItem => newsItem.preference))} type='SAVED' /> :
                <Box
                  component="main"
                  sx={{ flexGrow: 2, p: 3 }}>
                  <NoItems />
                </Box>
          }
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Copyright />
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
}
