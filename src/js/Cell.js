import React, { Component } from 'react';

class Cell extends Component {
    render() {
        const {
            className, changeHandler, pos, interval, size, containerWidth
        } = this.props;
        const transitionDuration = Math.min(
            0.4,
            ((parseFloat(interval) / 2) / 1000)
        );


        return (
          <span
              className={className}
              style={{
                  transition: `background-color ${transitionDuration}s`,
              }}
              onClick={() => this.props.changeHandler(pos.x, pos.y)}
          ></span>
        );
    }
}

export default Cell;
