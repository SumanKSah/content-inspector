import React from 'react';
import './Widgets.css';

const Widgets = () => {
  const list = ['Smart tips Collect', 'Beacon Collection', 'Launcher Collection', 'Flow'];
  const getCollectionElem = (widget) => {
    return (
      <div className='widget-container'>
        <div>
          <span className='widget-title'>
            {widget}
          </span>
          <span className='widget-eval-error'>
            {` ($(widget))`}
          </span>
        </div>
        <div className='accordion-icon'>
          {'<'}
        </div>
      </div>
    )
  }
  return (
    <div className='widgets-container'>
      {list.map((widget) => {
        return getCollectionElem(widget);
      })}
    </div>
  );
}

export default Widgets;