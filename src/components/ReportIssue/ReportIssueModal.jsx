import React, { useState } from 'react';
import './ReportIssue.css';

const ReportIssueModal = ({minimizeClickHandler}) => {

  const [showButton, setShowButton] = useState(true);
  const [showGif, setShowGif] = useState(false);

  const options = [
    'Content did not appear',
    'Styling issue detected',
    'Content flickering issue',
    'Scrolling issue Detected',
    'Other'
  ];

  // const options = [
  //   {name: 'Content did not appear', value: 'Content did not appear'},
  //   {name: 'Styling issue detected', value: 'Styling issue detected'},
  //   {name: 'Content flickering issue', value: 'Content flickering issue'},
  //   {name: 'Scrolling issue Detected', value: 'Scrolling issue Detected'},
  //   {name: 'None of the above', value: 'None of the above'}
  // ];

  const submitReport = () => {
    window.top.postMessage("$#@download_usage_reports:", "*");
    let submitButtom = document.getElementById("submitButton");
    submitButtom.innerText = "Sending Mail ...";
    setTimeout(()=> {
      setShowGif(true);
      setShowButton(false);
    }, 2000);
  }

  return (
    <>
    <div className='mask' />
    <div className='report-issue-container'>
      <div className='report-modal-header'>
        <div className='report-modal-title'>Report an Issue</div>
        <div className='report-modal-close'>
          <div
            onClick={()=>{
              minimizeClickHandler();
            }}
            >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="#6B697B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className='report-issue-description'>
        Tell us about your issue and we’ll comeback with solution at the earliest. Check your email for issue updates.
      </div>

      <div className='report-type'>
        <label>Type <span>*</span></label>
        <select name='type' id='report-issue-type'>
          {
            options.map((optionStr) => {
              return <option value='optionStr'>{optionStr}</option>
            })
          }
        </select>
      </div>

      <div className='report-issue-desc'>
        <label>Describe your issue</label>
        <textarea name='desc' id='report-issue-desc' rows='4' placeholder='Type here' />
      </div>

      <div className='access-logs'>
        <input type='checkbox' />
        <label>Allow whatfix to access logs of past 30 mins</label>
      </div>

      {
      showButton &&
      <button className='report-issue-submit'
        id='submitButton'
        onClick={submitReport}
      >
        Submit
      </button> }

      {
      showGif &&
      <div className="tickImage">
        <img style={{borderRadius:10}} height={50} width={50} src="https://c.tenor.com/6ZkJEn80W7kAAAAC/tenor.gif" alt="submitGif" />
      </div>
      
      }
    </div>
    </>
  );
}

export default ReportIssueModal;