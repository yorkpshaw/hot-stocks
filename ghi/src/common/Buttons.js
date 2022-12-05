
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import IconButton from '@mui/material/IconButton';
import { useCreateOrUpdateSavedStockMutation } from '../rtk-files/savedStocksApi';
import { useCreateOrUpdateSavedNewsItemMutation } from '../rtk-files/savedNewsItemsApi';
import { preventDefault } from '../common/utils';
import { togglePortfolioDialog, updateCostCurrent } from '../rtk-files/portfolioDialogSlice';
import { useDispatch } from 'react-redux';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { useLazyGetStockQuery } from '../rtk-files/stocksApi';
import CircularProgress from '@mui/material/CircularProgress';


export function PortfolioStockButton(props) {

    const dispatch = useDispatch();
    const card = props.card;
    const [triggerStock, {data: stockData, error: stockError, isLoading: stockLoading}] = useLazyGetStockQuery();

    // const fetchStock = () => {
    //     triggerStock(card.symbol);
    //     const data = stockData.stock;
    //     console.log(data);
    // }

    // onClick
    // togglePortfolioDialog
    // triggerStock, pass in data to PortfolioDialog

    return (
        <>
            {/* {
                stockLoading ?
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container sx={{ mx: 40 }}>
                      <CircularProgress />
                    </Grid>
                  </Container> :
                  stockData ? */}
                  <IconButton onClick={() => dispatch(togglePortfolioDialog(card), triggerStock(card.symbol))}>
                    <WorkOutlineOutlinedIcon />
                </IconButton>
                {/* :
                    <></> */}
            {/* } */}
        </>
    )
}

export function PrefTrueSavedStockButton(props) {

    const [createOrUpdateSavedStock, { error: savedStockError, isLoading: savedStockLoading }] = useCreateOrUpdateSavedStockMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedStock, () => ( { symbol: card.symbol, preference: true } ))} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
    )
}

export function PrefFalseSavedStockButton(props) {

    const [createOrUpdateSavedStock, { error: savedStockError, isLoading: savedStockLoading }] = useCreateOrUpdateSavedStockMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedStock, () => ( { symbol: card.symbol, preference: false } ))} value={card} size="small"><ClearOutlinedIcon /></IconButton>
    )
}

export function PrefTrueSavedNewsItemButton(props) {

    const [createOrUpdateSavedNewsItem, { error: savedNewsItemError, isLoading: savedNewsItemLoading }] = useCreateOrUpdateSavedNewsItemMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedNewsItem, () => ( { title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: true } ))} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
    )

}

export function PrefFalseSavedNewsItemButton(props) {

    const [createOrUpdateSavedNewsItem, { error: savedNewsItemError, isLoading: savedNewsItemLoading }] = useCreateOrUpdateSavedNewsItemMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedNewsItem, () => ( { title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: false } ))} value={card} size="small"><ClearOutlinedIcon /></IconButton>
    )

}
