import * as React from 'react';
import { useState } from 'react';

import { ErrorNotification } from '../common/ErrorNotification';
import { Copyright } from '../common/Copyright';

import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { CardList } from '../common/CardList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useGetNewsItemsQuery } from '../rtk-files/newsItemsApi';
import { useLazyGetStocksQuery } from '../rtk-files/stocksApi';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { PortfolioDialog } from '../common/PortfolioDialog';


const theme = createTheme();

export function SearchList() {

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { data: newsItemsData, isLoading: newsItemsLoading } = useGetNewsItemsQuery();
  const [triggerStocks, { data: stocksData, isLoading: stocksLoading }] = useLazyGetStocksQuery();
  const [error, setError] = useState('');
  const [filteredNewsItemsData, setFilteredNewsItemsData] = useState([]);


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
      <PortfolioDialog />
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
                sx={{ mt: 2, mb: 3, width: '50ch' }} />
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
                    <CardList cards={stocksData.stocks} /> :
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

// 83-104
