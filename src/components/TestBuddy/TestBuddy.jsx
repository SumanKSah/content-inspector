import React, { useState } from 'react';
import LeftNav from '../LeftNav/LeftNav';
import ContentArea from '../ContentArea/ContentArea';
import './TestBuddy.css';
import DebugView from '../Debug/DebugView';

const TestBuddy = ({minimizeClickHandler}) => {
  const [view, setView] = useState("contentView");

  // This is to set the debug view
  window.setView = setView;
  
  return (
    <div className='outer-container'>
      <LeftNav />
      { getView(view, setView, minimizeClickHandler) }
    </div>
  );
}

const getView = (view, setView, minimizeClickHandler) => {
  switch(view) {
    case "contentView": 
      return <ContentArea 
                minimizeClickHandler={minimizeClickHandler}
                setView={setView}
              />;
    case "debugView":
      return <DebugView 
              minimizeClickHandler={minimizeClickHandler}
              setView={setView}
            />;
  }
}

export default TestBuddy;