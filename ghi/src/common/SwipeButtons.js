import Reacr from 'react';

import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';

import IconButton from '@mui/material/IconButton';


function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton classname="swipeButtons__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton classname="swipeButtons__left">
        <FavoriteBorderIcon fontSize="large" />
      </IconButton>
      <IconButton classname="swipeButtons__info">
        <InfoIcon fontSize="large" />
      </IconButton>
      <IconButton classname="swipeButtons__share">
        <ShareIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
