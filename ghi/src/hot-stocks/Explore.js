import * as React from 'react';
import { ContentCard } from '../common/ContentCard';
import SwipeButtons from '../common/SwipeButtons';
import Header from '../common/Header';
import Card from '../common/Card';

import './Explore.css';

export function Explore(props) {

  return (
    <>
      <div className="explore">
        {/* <Header /> */}
        <Card />
        <SwipeButtons />
        {/* <ContentCard /> */}
        {/* Card */}
        {/* Buttons */}
      </div>
    </>

  );

}
