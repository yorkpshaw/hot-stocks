import * as React from 'react';
import SwipeButtons from '../common/SwipeButtons';
import { Card } from '../common/Card';
import BackOfCard from '../common/BackOfCard';
import { useGetNewsItemsQuery } from '../../rtk-files/newsItemsApi';
import { useGetStocksQuery } from '../../rtk-files/stocksApi';
import TinderCard from 'react-tinder-card';

export function Explore() {

  const { data: newsItemsData, isLoading: newsItemsLoading } = useGetNewsItemsQuery();
  const { data: stocksData, isLoading: stocksLoading } = useGetStocksQuery();



  return (
    <>
      {newsItemsLoading ?
        'Loading' :
        newsItemsData ?
          <Card cards={newsItemsData} /> :
          <></>
      }
    </>
    // <div>
    //   <h1>{newsItem.title}</h1>
    //   <div className='cardContainer'>
    //     {/* {db.map((character, index) => ( */}



    //     {newsItemsData.map((character, index) => (
    //       <TinderCard
    //         ref={childRefs[index]}
    //         className='swipe'
    //         key={character.name}
    //         onSwipe={(dir) => swiped(dir, character.name, index)}
    //         onCardLeftScreen={() => outOfFrame(character.name, index)}
    //       >
    //         <div
    //           //Background image is where stock ticker image and news item photo will be displayed
    //           style={{ backgroundImage: 'url(' + character.url + ')' }}
    //           className='card'
    //         >
    //           <h3>{character.name}</h3>
    //         </div>
    //       </TinderCard>
    //     ))}
    //   </div>
    // </div>
  );

  // return (
  //   <>
  //     <div >
  //       <h2>This has to be a joke</h2>
  //       {/* <Card /> */}
  //       {/* <SwipeButtons /> */}
  //     </div>
  //   </>
  // );
}
