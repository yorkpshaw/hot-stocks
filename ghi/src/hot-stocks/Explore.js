import * as React from 'react';
import {ContentCard} from '../common/ContentCard';
import { useGetNewsItemsQuery } from '../rtk-files/newsItemsApi';
import { useGetStocksQuery } from '../rtk-files/stocksApi';
import { ErrorNotification } from '../common/ErrorNotification';
import { Copyright } from '../common/Copyright';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PortfolioDialog } from '../common/PortfolioDialog';
import { useState } from 'react';


export function Explore() {

    const theme = createTheme();

    const { data: newsItemsData, isLoading: newsItemsLoading } = useGetNewsItemsQuery();
    const { data: stocksData, isLoading: stocksLoading } = useGetStocksQuery();

    // const [ combinedData, setCombinedData ] = useState([]);

    // if (newsItemsLoading || stocksLoading) {
    //     console.log('loading');
    // } else {
    //     setCombinedData(stocksData.stocks.concat(newsItemsData.news_items));
    // }

    return (
        <>
            <PortfolioDialog />
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
                    { newsItemsLoading || stocksLoading ?
                        'Loading' :
                        newsItemsData && stocksData ?
                        // combinedData ?
                        <ContentCard cards={ stocksData.stocks.concat(newsItemsData.news_items) }/> :
                        <></>
                    }
                    {/* { newsItemsLoading ?
                        'Loading' :
                        newsItemsData ?
                        <ContentCard cards={ newsItemsData.news_items }/> :
                        <></>
                    } */}
                    {/* { stocksLoading ?
                        'Loading' :
                        stocksData ?
                        <ContentCard cards={ stocksData.stocks }/> :
                        <></>
                    } */}
                </>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            </ThemeProvider>
        </>
    );

}
