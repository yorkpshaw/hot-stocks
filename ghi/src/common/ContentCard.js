import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useCreateOrUpdateSavedNewsItemMutation } from '../rtk-files/savedNewsItemsApi';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import IconButton from '@mui/material/IconButton';
import { useCreateOrUpdateSavedStockMutation } from '../rtk-files/savedStocksApi';
import { deepOrange } from '@mui/material/colors';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { togglePortfolioDialog } from '../rtk-files/portfolioDialogSlice';
import { useDispatch } from 'react-redux';


// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


export function ContentCard(props) {

  const cards = props.cards;

  const dispatch = useDispatch();
  const [cardIndex, setCardIndex] = useState(randomIntFromInterval(0, cards.length));
  const [card, setCard] = useState(cards[cardIndex]);
  const [createOrUpdateSavedNewsItem, { error: savedNewsItemError, isLoading: savedNewsItemLoading }] = useCreateOrUpdateSavedNewsItemMutation();
  const [createOrUpdateSavedStock, { error: savedStockError, isLoading: savedStockLoading }] = useCreateOrUpdateSavedStockMutation();


  async function handlePrefTrueSavedNewsItemClick(e) {
    e.preventDefault();
    createOrUpdateSavedNewsItem({ title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: true });
    setCardIndex(randomIntFromInterval(0, cards.length));
    setCard(cards[cardIndex]);
  }

  async function handlePrefFalseSavedNewsItemClick(e) {
    e.preventDefault();
    createOrUpdateSavedNewsItem({ title: card.title, news_url: card.news_url, time_published: card.time_published, banner_image: card.banner_image, summary: card.summary, preference: false });
    setCardIndex(randomIntFromInterval(0, cards.length));
    setCard(cards[cardIndex]);
  }

  async function handlePrefTrueSavedStockClick(e) {
    e.preventDefault();
    createOrUpdateSavedStock( { symbol: card.symbol, preference: true } );
    setCardIndex(randomIntFromInterval(0, cards.length));
    setCard(cards[cardIndex]);
  }

  async function handlePrefFalseSavedStockClick(e) {
    e.preventDefault();
    createOrUpdateSavedStock( { symbol: card.symbol, preference: false } );
    setCardIndex(randomIntFromInterval(0, cards.length));
    setCard(cards[cardIndex]);
  }

  async function handlePortfolioStockClick(e) {
    // e.preventDefault();
    dispatch(togglePortfolioDialog(card), setCard(cards[randomIntFromInterval(0, cards.length)]));
    // setCardIndex(cardIndex + 1);
    // setCard(cards[cardIndex]);
  }


  return (
    <>
    {
      card.title ?
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={card.banner_image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title.slice(0,40)}...
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {card.time_published}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.summary.slice(0,100)}...
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={handlePrefTrueSavedNewsItemClick} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
            <IconButton onClick={handlePrefFalseSavedNewsItemClick} value={card} size="small"><ClearOutlinedIcon /></IconButton>
          </CardActions>
        </Card>
      </> :
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={'https://mui.com/static/images/cards/contemplative-reptile.jpg'}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {card.name }
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {card.symbol}
          </Typography>
          <Typography sx={{color: deepOrange[500]}}>
            { card.cost_current ?
              'C $' + card.cost_current :
              <></>
            }
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={handlePrefTrueSavedStockClick} value={card} size="small"><TurnedInNotOutlinedIcon /></IconButton>
          <IconButton onClick={handlePrefFalseSavedStockClick} value={card} size="small"><ClearOutlinedIcon /></IconButton>
          <IconButton onClick={handlePortfolioStockClick} value={card} size="small"><WorkOutlineOutlinedIcon /></IconButton>
        </CardActions>
      </Card>
    }
    </>

  );
}
