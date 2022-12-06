import * as React from 'react';
import { ContentCard } from '../common/ContentCard';
import { useGetNewsItemsQuery } from '../rtk-files/newsItemsApi';
import { useGetStocksQuery } from '../rtk-files/stocksApi';
import { ErrorNotification } from '../common/ErrorNotification';
import { Copyright } from '../common/Copyright';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PortfolioDialog } from '../common/PortfolioDialog';
import { useSelector } from 'react-redux';


export function Explore() {

  const theme = createTheme();

    const { data: newsItemsData, isLoading: newsItemsLoading } = useGetNewsItemsQuery();
    const { queries } = useSelector(state => state.stocks);
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
                    marginTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                {/* <ErrorNotification error={error} /> */}
                <>
                    { newsItemsLoading ?
                        'Loading...' :
                        newsItemsData && queries[`getStocks(undefined)`]?.data?.stocks ?
                        <ContentCard cards={ queries[`getStocks(undefined)`]?.data?.stocks.concat(newsItemsData.news_items) }/> :
                        <></>
                    }
                </>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            </ThemeProvider>
        </>
    );

}
