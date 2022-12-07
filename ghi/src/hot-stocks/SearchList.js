import * as React from 'react';
import { useState } from 'react';
import { Copyright } from '../common/Copyright';
import { ErrorNotification } from '../common/ErrorNotification';
import CircularProgress from '@mui/material/CircularProgress';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../common/CardList';
import { PortfolioDialog } from '../common/PortfolioDialog';
import { useGetNewsItemsQuery } from '../rtk-files/newsItemsApi';
import { useGetStockQuery, useLazyGetStocksQuery } from '../rtk-files/stocksApi';

const theme = createTheme();

export function SearchList() {

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { data: newsItemsData, isLoading: newsItemsLoading } = useGetNewsItemsQuery();
  const { data: stockData } = useGetStockQuery('AAPL');
  const [triggerStocks, { data: stocksData, isLoading: stocksLoading }] = useLazyGetStocksQuery();
  const [error, setError] = useState('');
  const [filteredNewsItemsData, setFilteredNewsItemsData] = useState([]);
  const { portfolioDialog } = useSelector(state => state.portfolioDialog);

  async function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      triggerStocks({ value: search });
      setFilteredNewsItemsData(
        newsItemsData.news_items.filter(
          newsItem => newsItem.title.toLowerCase().includes(search.toLowerCase())
        ));
    }
  }

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
            <Box component="form"
              method="post"
              onSubmit={handleSubmit}
              noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                id="search"
                label="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                variant="outlined"
                autoFocus
                sx={{ mt: 2, mb: 3}} />
              <IconButton
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2.5, mb: 2, ml: 2.5, bgcolor: deepOrange[500] }}>
                <SearchOutlinedIcon />
              </IconButton>
              {
                stocksLoading ?
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container sx={{ mx: 40 }}>
                      <CircularProgress />
                    </Grid>
                  </Container> :
                  stocksData ?
                    <CardList cards={stocksData.stocks}  /> :
                    <></>
              }
              {
                newsItemsLoading ?
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container sx={{ mx: 40 }}>
                      <CircularProgress />
                    </Grid>
                  </Container> :
                  newsItemsData ?
                    <CardList cards={filteredNewsItemsData} /> :
                    <></>
              }
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
