import React, { useState } from 'react';
import Header from '../Header/Header';
import './ContentArea.css';
import ContentHome from './ContentHome';

const ContentArea = ({setView, minimizeClickHandler}) => {
  const [homeView, setHomeView] = useState(true);
  return (
    <div className='content-area'>
      <Header name={"Debugging Tool"} minimizeClickHandler={minimizeClickHandler}/>
      {
        homeView 
        ? <ContentHome setView={setView}/>
        : []
      }
    </div>
  );
}

export default ContentArea;