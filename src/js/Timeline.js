import React, { Component } from 'react';
import itemData from './timeline-data';
import CV from '../../static/files/cv.pdf'

class TimelineItem extends Component {


  render() {
    return (
      <li
        className="timeline-item"
      >
        <div className="timeline-item-date">
          <span className="timeline-item-date-from">{this.props.fromDate}</span>
          <span className="timeline-item-date-to">{this.props.toDate}</span>
        </div>
        <div className="timeline-item-flex-container">
          <div className="timeline-item-short" onMouseEnter={this.props.toggleHover} onMouseLeave={this.props.toggleHover}>
            <div className={`timeline-item-short-title ${this.props.showLongText ? 'selected-item' : ''}`}>{this.props.title}</div>
            <div className="timeline-item-short-place">{this.props.place}</div>
          </div>
          <div className={`timeline-item-long ${this.props.showLongText ? '' : 'hidden'}`}>
            <div className="timeline-item-long-title">{this.props.tile}</div>
            <div className="timeline-item-long-description">{this.props.description}</div>
          </div>
        </div>
      </li>
    );
  }
};

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItem: null,
    };
  }

  toggleHover(itemIndex) {
    console.log('toggling')
    this.setState(
      () => {
        if (itemIndex !== this.state.displayItem) {
          return { displayItem: itemIndex };
        } else {
          return { displayItem: null };
        }
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <h2>Previous Commits</h2> or <a href={CV}>view a boring pdf version</a>
        <ul className="timeline">
          {itemData.items.map(data => (
            <TimelineItem
              key={`item-${data.id}`}
              toggleHover={() => this.toggleHover(data.id)}
              showLongText={ this.state.displayItem === data.id}
              {...data}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
};

export default Timeline;
