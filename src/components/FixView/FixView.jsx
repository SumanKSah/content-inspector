import React from 'react';
import Header from '../Header/Header';
import ReportIssueModal from '../ReportIssue/ReportIssueModal';
import './FixView.css';

const FixView = ({setView, minimizeClickHandler}) => {
  return (
    <div className='fix-view-container'>
      <button>{`<-`}</button>
      <Header name={"Fix Suggestions"} minimizeClickHandler={minimizeClickHandler}/>
      <ReportIssueModal />
    </div>
  );
}

export default FixView;