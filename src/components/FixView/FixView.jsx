import React, { useEffect } from 'react';
import Header from '../Header/Header';
import ReportIssueModal from '../ReportIssue/ReportIssueModal';
import './FixView.css';
import IssueView from './IssueView';

const FixView = ({setView, minimizeClickHandler}) => {

  window.addEventListener("message", (data) => {
    if(data?.data?.message === "testBuddyMessageResult" && !window.isAiResponse) {
      window.wfxTestBuddyResponse = data?.data?.obj;
      const suggestion = data?.data?.obj?.message;
      const hasIssue = data?.data?.obj?.hasIssue;

      if(hasIssue) {
        const elems = document.querySelectorAll("#suggestion-option");
        elems.forEach((elem)=>elem.innerHTML="")
        elems[0].innerHTML = `<b>${suggestion}</b>`;
      }
    }
  });

  const segmentId = window.segmentId;
  const flowId = window.flowId;
  const suspect = window.suspect;
  const type = window.type;
  const step = window.step;

  useEffect(() => {
    window.top.postMessage({message: "testBuddyRequestResponse", obj: {
      segmentId: segmentId,
      flowId: flowId,
      suspect: suspect,
      type: type,
      step: step
    }}, "*");
  }, []);

  const issue = [
    {
      name: "Content did not appear",
      fix: [
        "Visibility rule might not have configured correctly",
        "Element could not be found on the current screen",
        "The CSS selector entered under display rules might not be correct"
      ]
    },
    {
      name: "Styling issue detected",
      fix: [
        "Verify whatfix widget style from dashboard",
        "Possibility of CSS being overridden by Host App"
      ]
    },
    {
      name: "Content flickering issue",
      fix: [
        "Check if application view is keep on changing",
        "The selected element might be overlapping with some other element"
      ]
    },
    {
      name: "Scrolling issue Detected",
      fix: [
        "Content might be created in scroll view, use Dom-inline"
      ]
    },
    {
      name: "None of the above",
      fix: [
        "Check with our AI Assitant",
        "Allow us to capture logs to debug it further"
      ]
    }
  ]
  return (
    <div className='fix-view-container'>
      <Header name={"Fix Suggestions"} minimizeClickHandler={minimizeClickHandler}/>
      <div className="view-body-fix">
        <div className='issue-heading'>
          {window.viewData.widget + " "}
          <b>
          {window.viewData.collectionName.name}
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