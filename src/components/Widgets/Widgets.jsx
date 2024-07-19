import React, { useState } from 'react';
import './Widgets.css';

let list = Object.keys(window.wfxTestBuddyData || {});
let data = window.wfxTestBuddyData;;

const Success = () => {
  return <span className='success'>Success</span>;;
}
const Failure = () => {
  return <span className='failure'>Failed</span>;;
}

const Segment = ({segment, setView}) => {
  return (
    <div className='segment-outer'>
      <div className='segment-container'>
        <div className='segment-info'>
          <span className='step-count'>
            {segment.numSteps}
          </span>
          <span className='segment-title'>
            {segment.name}
          </span>
        </div>
        <div className='status-tag'>
          {segment.status === 'success' ? <Success /> : <Failure />}
        </div>
      </div>
      {
        segment.status !== 'success' &&
        <div className='failed-segment'>
          <div className='failed-message'>Visibility rules are failing</div>
          <button className='failed-action' onClick={() => setView('fixView')}>Fix now</button>
        </div>
      }
    </div>
  );
}

const getStatsElem = (widget, setView) => {
  const segData = data[widget];
  // const stats = Array(3).fill({name: 'Collection Name', numSteps: segData.flowData, status: ''});
  const stats = segData.map((datam, index) => {
    return {
      name: datam.name,
      numSteps: index+1,
      status: datam.status ? "success" : "failure"
    }
  })
  console.log("Stats: ", stats);
  return (<div className='stats-container'>
    {stats.map((segment) => {
      return <Segment segment={segment} setView={setView} />
    })}
  </div>)
};

const Collection = ({ widget , setView}) => {
  const [isActive, setIsActive] = useState(false);

  list = Object.keys(window.wfxTestBuddyData || {});
  data = window.wfxTestBuddyData;

  const getFailurecount = (title) => {
    const segs = data[title];
    const count = segs.filter((seg) => {
      return !seg.status
    }).length
    return count;
  }

  return (
    <div>
      <div className='widget-container' onClick={() => setIsActive(!isActive)}>
        <div>
          <span className='widget-title'>
            {widget}
          </span>
          <span className={`${getFailurecount(widget) > 0 ? "widget-eval-error" : "widget-eval-success"}`}>
            { ` (${getFailurecount(widget)} errors)` }
          </span>
        </div>
        <div className='accordion-icon'>
          {isActive ? '>' : '<'}
        </div>
      </div>
      {isActive && getStatsElem(widget, setView)}
    </div>
  );
};

const Widgets = ({setView}) => {
  list = Object.keys(window.wfxTestBuddyData || {});
  data = window.wfxTestBuddyData;

  return (
    <div className='widgets-container'>
      {list.map((widget) => 
        <Collection widget={widget} setView={setView} />
      )}
    </div>
  );
}

export default Widgets;