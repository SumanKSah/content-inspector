import React from 'react';
import Header from '../Header/Header';
import ReportIssueModal from '../ReportIssue/ReportIssueModal';
import './FixView.css';
import IssueView from './IssueView';

const FixView = ({setView, minimizeClickHandler}) => {
  const issue = [
    {
      name: "Content did not appear",
      fix: [
        "Visibility rule might not have configured correctly"
      ]
    },
    {
      name: "Styling issue detected",
      fix: [
        "Verify whatfix widget style from dashboard"
      ]
    },
    {
      name: "Content flickering issue",
      fix: [
        "Check if application view is keep on changing"
      ]
    },
    {
      name: "Scrolling issue Detected",
      fix: []
    },
    {
      name: "None of the above",
      fix: []
    }
  ]
  return (
    <div className='fix-view-container'>
      <Header name={"Fix Suggestions"} minimizeClickHandler={minimizeClickHandler}/>
      <div className="view-body-fix">
        <div className='issue-heading'>
          {window.viewData.widget + " "}
          <b>
          {window.viewData.collectionName}
          </b>
        </div>

        <div className="view-box">
          <IssueView 
            fix={issue[window.viewData.issueNumber].fix}
            name={issue[window.viewData.issueNumber].name}
          />
        </div>
      </div>
    </div>
  );
}

export default FixView;