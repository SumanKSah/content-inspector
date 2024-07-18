import React, { useState } from 'react';
import './Widgets.css';

const list = ['Smart tips Collection', 'Beacon Collection', 'Launcher Collection', 'Flow'];

const Success = () => {
  return <span className='success'>Success</span>;
}
const Failure = () => {
  return <span className='failure'>Failed</span>;
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
          <div className='failed-message'>Element selection is incorrect</div>
          <button className='failed-action' onClick={() => setView('fixView')}>Fix now</button>
        </div>
      }
    </div>
  );
}

const getStatsElem = (widget, setView) => {
  const index = list.findIndex((item) => item === widget);
  const stats = Array(3).fill({name: 'Collection Name', numSteps: index+1, status: ''});
  console.log("Stats: ", stats);
  return (<div className='stats-container'>
    {stats.map((segment) => {
      return <Segment segment={segment} setView={setView} />
    })}
  </div>)
};

const Collection = ({ widget , setView}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className='widget-container' onClick={() => setIsActive(!isActive)}>
        <div>
          <span className='widget-title'>
            {widget}
          </span>
          <span className='widget-eval-error'>
            {` ($(widget))`}
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

  return (
    <div className='widgets-container'>
      {list.map((widget) => 
        <Collection widget={widget} setView={setView} />
      )}
    </div>
  );
}

export default Widgets;