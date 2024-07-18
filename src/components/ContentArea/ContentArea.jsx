import React from 'react';
import Header from '../Header/Header';
import Widgets from '../Widgets/Widgets';
import './ContentArea.css';

const ContentArea = ({minimizeClickHandler}) => {
  return (
    <div className='content-area'>
      <Header minimizeClickHandler={minimizeClickHandler} />
      <div className='debug-manually-container'>
        <div className='debug-manually'>
          <div className='debug-manually-text'>
            Content not displaying as expected?
          </div>
          <button className='debug-manually-button'>
            Debug manually
          </button>
        </div>
      </div>
      <Widgets />
    </div>
  );
}

export default ContentArea;
