import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import TinderCard from 'react-tinder-card';

import CloseIcon from '@mui/icons-material/Close';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';

import ReplayIcon from '@mui/icons-material/Replay';
// import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

import './Card.css';


const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
];

function Advanced() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
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
    <div>
      {/* <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      /> */}
      <h1>Super eye-catching article name</h1>
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              {/* <h3>{character.name}</h3> */}
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='swipeButtons'>
        <IconButton className="swipeButtons_left">
          <CloseIcon fontSize="large" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')} />
        </IconButton>
        <IconButton className="swipeButtons_repeat">
          <ReplayIcon fontSize="large" style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()} />
        </IconButton>
        <IconButton className="swipeButtons_share">
          <ShareIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_right">
          <FavoriteIcon fontSize="large" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')} />
        </IconButton>
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button> */}
        {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button> */}
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button> */}
      </div>
      {/* {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )} */}
    </div>
  );
}

export default Advanced;
