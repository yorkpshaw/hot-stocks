import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Copyright } from '../../common/Copyright';
import { InfoDialog } from '../../common/InfoDialog';
import { PortfolioDialog } from '../../common/PortfolioDialog';
import { ContentCard } from './ContentCard';

export function Explore() {

    const theme = createTheme();

    const { queries: stocksQueries } = useSelector(state => state.stocks);
    const { queries: newsItemsQueries } = useSelector(state => state.newsItems);
    const { portfolioDialog } = useSelector(state => state.portfolioDialog);
    const { infoDialog } = useSelector(state => state.infoDialog);

    return (
        <>
            {
                portfolioDialog ?
                    <PortfolioDialog /> :
                    <></>
            }
            {
                infoDialog ?
                    <InfoDialog /> :
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
                            alignItems: 'center'
                        }}>
                        <>
                            {
                                stocksQueries[`getStocks(undefined)`]?.data?.stocks && newsItemsQueries[`getNewsItems(undefined)`]?.data?.news_items ?
                                    <ContentCard cards={stocksQueries[`getStocks(undefined)`]?.data?.stocks.concat(newsItemsQueries[`getNewsItems(undefined)`]?.data?.news_items)} /> :
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
