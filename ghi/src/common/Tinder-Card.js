import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import TinderCard from 'react-tinder-card';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import './Card.css';
import { useGetStockQuery, useGetStocksQuery } from '../rtk-files/stocksApi';
import { useGetNewsItemsQuery } from '../rtk-files/newsItemsApi';
//Should be a token here because you can only see this when you are logged in
const db = [
  {
    name: 'Warren Bufffett explains his donation',
    url: 'https://image.cnbcfm.com/api/v1/image/105894584-15571486323141u8a0031r.jpg?v=1669381957&w=600&h=300&ffmt=webp&vtcrop=y'
  },
  {
    name: 'boost household spending by $443 a month',
    url: 'https://image.cnbcfm.com/api/v1/image/107074440-1668701675872-GettyImages-1241224834r.jpg?v=1669386690&w=600&h=630&ffmt=webp&vtcrop=y'
  }
];
// Lets write the logic out and then fill in the blanks
// - i need a function that calls to the newsItem and stocks API data
// I wanted to use the useState and set it to a a empty array but that doesn't make sense if i want the data at all times -_-
// (lets start with one first lol)
//

export function Card(props) {

  const cards = props.cards;

  const [newsItems, setNewsItems] = useState([]);
  const [stocks, setStocks] = useState([]);
  const { data: stocksData } = useGetStockQuery();
  const [filterNewsItemDataAndStocksData, setFilterNewsItemDataAndStockData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);
  // useEffect
  const childRefs = useMemo(
    () =>
      Array(cards.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  // const canGoBack = currentIndex < db.length - 1;
  const canGoBack = currentIndex < cards.length - 1;
  const canSwipe = currentIndex >= 0;
  // set last direction and decrease current index
  const swiped = (direction, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };
  // Need a function that will map through news items and stock to combine the two then map through them again
  //   const setFilterNewsItemDataAndStockData(
  // );
  const outOfFrame = (name, idx) => {
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };
  const swipe = async (dir) => {
    // if (canSwipe && currentIndex < db.length) {
    if (canSwipe && currentIndex < cards.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
      <div className='cardContainer'>
        {cards.news_items.map((card, index) => (
          <div key={card.news_url}>
            <TinderCard
              ref={childRefs[index]}
              className='swipe'
              onSwipe={(dir) => swiped(dir, index)}
              onCardLeftScreen={() => outOfFrame(index)}>
              {
              card.banner_image ?
                <div
                  //Background image is where stock ticker image and news item photo will be displayed
                  style={{ backgroundImage: 'url(' + card.banner_image + ')' }}
                  className='card'
                >
                    <h1>{card.title.slice(0,40)}...</h1>
                    <h2>{card.time_published}</h2>
                </div> :
                <div
                  //Background image is where stock ticker image and news item photo will be displayed
                  style={{ backgroundColor: '#00B1E1' }}
                  className='card'
                >
                    <h1>{card.title.slice(0,40)}...</h1>
                    <h2>{card.time_published}</h2>
                </div>
              }
            </TinderCard>
          </div>
        ))}
      </div>
      // {/* <div className='swipeButtons'>
      //   <IconButton className="swipeButtons_left">
      //     <CloseIcon fontSize="large" style={{ backgroundColor: !canSwipe && '#C3C4D3' }} onClick={() => swipe('left')} />
      //   </IconButton>
      //   <IconButton className="swipeButtons_repeat">
      //     <ReplayIcon fontSize="large" style={{ backgroundColor: !canGoBack && '#C3C4D3' }} onClick={() => goBack()} />
      //   </IconButton>
      //   <IconButton className="swipeButtons_share">
      //     <ShareIcon fontSize="large" />
      //   </IconButton>
      //   <IconButton className="swipeButtons_right">
      //     <FavoriteIcon fontSize="large" style={{ backgroundColor: !canSwipe && '#C3C4D3' }} onClick={() => swipe('right')} />
      //   </IconButton>
      // </div> */}
  );
}
