import React from 'react';
import Header from '../Header/Header';
import './FixView.css';

const FixView = ({setView, minimizeClickHandler}) => {
  return (
    <div className='fix-view-container'>
      <button>{`<-`}</button>
      <Header name={"Fix Suggestions"} minimizeClickHandler={minimizeClickHandler}/>
    </div>
  );
}

export default FixView;