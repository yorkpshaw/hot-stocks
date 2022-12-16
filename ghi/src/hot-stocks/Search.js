import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardList } from '../common/CardList';
import { Copyright } from '../common/Copyright';
import { SmallLoading } from '../common/Loading';
import { NoItems } from '../common/NoItems';
import { PortfolioDialog } from '../common/PortfolioDialog';
import { useLazyGetStocksQuery } from '../rtk-files/stocksApi';


const theme = createTheme();

export function Search() {

  const [search, setSearch] = useState('');
  const { queries: newsItemsQueries } = useSelector(state => state.newsItems);
  const [triggerStocks, { data: stocksData, isLoading: stocksLoading }] = useLazyGetStocksQuery();
  const [filteredNewsItemsData, setFilteredNewsItemsData] = useState([]);
  const { portfolioDialog } = useSelector(state => state.portfolioDialog);


  async function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      triggerStocks({ value: search });
      setFilteredNewsItemsData(
        newsItemsQueries[`getNewsItems(undefined)`]?.data?.news_items?.filter(
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
            }}>
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
                sx={{ mt: 2, mb: 3 }} />
              <IconButton
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2.5, mb: 2, ml: 2.5, bgcolor: deepOrange[500] }}>
                <SearchOutlinedIcon />
              </IconButton>
            </Box>
            {
              stocksLoading ?
                <Box
                  component="main"
                  sx={{ flexGrow: 2, p: 3 }}>
                  <SmallLoading />
                </Box> :
                stocksData?.stocks && filteredNewsItemsData ?
                  <CardList cards={stocksData?.stocks?.concat(filteredNewsItemsData)} /> :
                  <Box
                    component="main"
                    sx={{ flexGrow: 2, p: 3 }}>
                    <NoItems />
                  </Box>
            }
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
