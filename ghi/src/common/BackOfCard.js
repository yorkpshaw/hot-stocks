import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import './Card.css';

function Card() {
  const [people, setPeople] = useState([
    {
      name: 'Warren Bufffett explains his donation',
      url: 'https://image.cnbcfm.com/api/v1/image/105894584-15571486323141u8a0031r.jpg?v=1669381957&w=600&h=300&ffmt=webp&vtcrop=y'
    },
    {
      name: 'boost household spending by $443 a month',
      url: 'https://image.cnbcfm.com/api/v1/image/107074440-1668701675872-GettyImages-1241224834r.jpg?v=1669386690&w=600&h=630&ffmt=webp&vtcrop=y'
    }
  ]);
  // Need function for when I swipe right vs left
  /* if ____ is ok (swiped right)
        updates the state with news item
        (method: "post")
      else
        swipe left
        (method: "delete")
        */
  useEffect(() => {

  }, []);

  return (
    <div className="cardContainer">
      {/* Watch Karis video, as that may help with the h1 over the container */}
      {people.map(person => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card">
            <h3>{person.name}</h3>
          </div>
          <IconButton className="add">
            <AddIcon fontSize="medium" />
          </IconButton>
        </TinderCard>
      ))
      }
    </div >
  );
}

export default Card;
