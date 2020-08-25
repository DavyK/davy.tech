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
          <div className="control-buttons">
            <button className="cancel" onClick={resetHandler}><i class="fas fa-eraser"></i></button>
            <button className="neutral" onClick={initializeHandler}><i class="fas fa-sync-alt"></i></button>
            <button className="action" disabled={started} onClick={startHandler}><i class="fas fa-play"></i></button>
            <button className="warning" disabled={!started} onClick={stopHandler}><i class="fas fa-pause"></i></button>
            <button className="neutral" onClick={tickOnce}><i class="fas fa-step-forward"></i></button>
          </div>
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
          <p className="text-help">Click on the circles to toggle individual cells!</p>
      </div>
    );
  }
}

export default Controls;
