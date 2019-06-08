import React, { Component } from 'react';


class Controls extends Component {

  render() {
    const {
        initialCount,
        changeInitialCountHandler,
        startHandler,
        stopHandler,
        initializeHandler,
        size,
        changeSizeHandler,
        interval,
        changeIntervalHandler,
        resetHandler,
        tickOnce,
        started,
    } = this.props;
    return (
      <div className="game-controls">
          <label>Initial Count (<span>{initialCount}</span>)</label>
          <input
              type="range"
              value={initialCount}
              onChange={changeInitialCountHandler}
              min="0"
              max={size*size}
              step="5"
          />
          <label>Number of Rows & Columns (<span>{size}</span>)</label>
          <input
              type="range"
              value={size}
              onChange={changeSizeHandler}
              min="10"
              max="40"
              step="1"
          />
          <label>Generation Interval (<span>{interval}</span>)</label>
          <input
              type="range"
              value={interval}
              onChange={changeIntervalHandler}
              min="50"
              max="500"
              step="5"
          />
          <button className="neutral" onClick={initializeHandler}>Initialise</button>
          <button className="cancel" onClick={resetHandler}>Reset</button>
          <button className="action" disabled={started} onClick={startHandler}>Start</button>
          <button className="warning" disabled={!started} onClick={stopHandler}>Stop</button>
          <button className="neutral" onClick={tickOnce}>Step Once</button>
      </div>
    );
  }
}

export default Controls;
