import React from 'react';
import Header from '../Header/Header';
import './ContentArea.css';

const ContentArea = ({minimizeClickHandler}) => {
  return (
    <div className='content-area'>
      <Header minimizeClickHandler={minimizeClickHandler}/>
      <div className='content1'>
        <div className='debug-manually'>
          <div className='debug-manually-text'>
            Content not displaying as expected?
          </div>
          <button className='debug-manually-button'>
            Debug manuaaly
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
