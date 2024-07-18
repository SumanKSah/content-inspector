import React from 'react';
import LeftNav from '../LeftNav/LeftNav';
import ContentArea from '../ContentArea/ContentArea';
import './TestBuddy.css';

const TestBuddy = ({minimizeClickHandler}) => {
  return (
    <div className='outer-container'>
      <LeftNav />
      <ContentArea minimizeClickHandler={minimizeClickHandler}/>
    </div>
  );
}

export default TestBuddy;