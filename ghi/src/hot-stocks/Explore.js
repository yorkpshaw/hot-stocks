import * as React from 'react';
import { ContentCard } from '../common/ContentCard';
import SwipeButtons from '../common/SwipeButtons';
import Header from '../common/Header';
import Card from '../common/Card';
import BackOfCard from '../common/BackOfCard';

import './Explore.css';

export function Explore(props) {

  return (
    <>
      <div className="explore">
        {/* <Header /> */}
        <Card />
        {/* <BackOfCard /> */}
        <SwipeButtons />
        {/* <ContentCard /> */}
        {/* Card */}
        {/* Buttons */}
      </div>
    </>

  );

}
