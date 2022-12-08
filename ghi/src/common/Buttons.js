import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { preventDefault } from '../common/utils';
import { togglePortfolioDialog } from '../rtk-files/portfolioDialogSlice';
import { useCreateOrUpdateSavedNewsItemMutation } from '../rtk-files/savedNewsItemsApi';
import { useCreateOrUpdateSavedStockMutation } from '../rtk-files/savedStocksApi';


export function PortfolioStockButton(props) {

    const dispatch = useDispatch();
    const card = props.card;

    return (
        <IconButton onClick={() => dispatch(togglePortfolioDialog(card))}>
            <WorkOutlineOutlinedIcon />
        </IconButton>
    )
}

export function PrefTrueSavedStockButton(props) {

    const [createOrUpdateSavedStock] = useCreateOrUpdateSavedStockMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedStock, () => ({ symbol: card.symbol, preference: true }))} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
    )
}

export function PrefFalseSavedStockButton(props) {

    const [createOrUpdateSavedStock] = useCreateOrUpdateSavedStockMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedStock, () => ({ symbol: card.symbol, preference: false }))} value={card} size="small"><ClearOutlinedIcon /></IconButton>
    )
}

export function PrefTrueSavedNewsItemButton(props) {

    const [createOrUpdateSavedNewsItem] = useCreateOrUpdateSavedNewsItemMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedNewsItem, () => ({ title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: true }))} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
    )

}

export function PrefFalseSavedNewsItemButton(props) {

    const [createOrUpdateSavedNewsItem] = useCreateOrUpdateSavedNewsItemMutation();
    const card = props.card;

    return (
        <IconButton onClick={preventDefault(createOrUpdateSavedNewsItem, () => ({ title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: false }))} value={card} size="small"><ClearOutlinedIcon /></IconButton>
    )

}

export function IntradayChartButton(props) {

    const card = props.card;

    return (
        <IconButton value={card} size="small"><ShowChartOutlinedIcon /></IconButton>
    )

}
