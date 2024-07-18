import React from 'react';
import LeftNav from '../LeftNav/LeftNav';
import ContentArea from '../ContentArea/ContentArea';
import './TestBuddy.css';

const TestBuddy = () => {
  return (
    <div className='outer-container'>
      <LeftNav />
      <ContentArea />
    </div>
  );
}

export default TestBuddy;