import React from 'react';
import itemData from './timeline-data';

const TimelineItem = (props) => (
  <li className="timeline-item">
    <div className="timeline-item-date">
      <span className="timeline-item-date-from">{props.fromDate}</span>
      <span className="timeline-item-date-to">{props.toDate}</span>
    </div>
    <div classNane="timeline-item-short">
      <div className="timeline-item-short-place">{props.place}</div>
      <div className="timeline-item-short-title">{props.title}</div>
    </div>
    <div classNane="timeline-item-long">
      <div className="timeline-item-long-title">{props.tile}</div>
      <div className="timeline-item-long-description">{props.description}</div>
    </div>
  </li>
);

const Timeline = () => {
  return (
    <React.Fragment>
      <span className="alert alert-warning">🚨page in progress...🚨</span>
      <h2>Previous Commits</h2>
      <ul className="timeline">
        {itemData.items.map(data => (
          <TimelineItem {...data} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Timeline;
