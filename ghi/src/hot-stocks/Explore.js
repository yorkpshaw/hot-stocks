import * as React from 'react';
import SwipeButtons from '../common/SwipeButtons';
import Card from '../common/Card';
import BackOfCard from '../common/BackOfCard';
import { useGetNewsItemsQuery } from '../rtk-files/newsItemsApi';



export function Explore() {


  return (
    <>
      <div className="explore">
        <Card />
        {/* <SwipeButtons /> */}
      </div>
    </>

  );

}
