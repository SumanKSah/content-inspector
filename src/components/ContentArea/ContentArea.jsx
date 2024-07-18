import React, { useState, useSyncExternalStore } from 'react';
import Header from '../Header/Header';
import './ContentArea.css';
import ContentHome from './ContentHome';

const ContentArea = ({minimizeClickHandler}) => {
  const [homeView, setHomeView] = useState(true);
  return (
    <div className='content-area'>
      <Header minimizeClickHandler={minimizeClickHandler}/>
      {
        homeView 
        ? <ContentHome />
        : []
      }
    </div>
  );
}

export default ContentArea;
