import React, { Component } from 'react';

const Cell = (props) => (
    <span className={props.className}></span>
);

export default class Maze extends Component {
    render () {
        let contents;
        let row, cols;
        let nRows = 5, nCols = 5;
        const cells = []
        for (let y = 0; y < nRows; y++) {
            cols = [];
            for (let x = 0; x < nCols; x++ ) {
                cols.push(
                    <Cell
                        className={`maze-cell`}
                        key={`maze-cell-${x}-${y}`}
                        pos={{ x, y }}
                    />
                );
            }
            row = <div className="maze-row" key={`row-${y}`}>{cols}</div>
            cells.push(row);
        }
        contents = (
            <div>
                {cells}
            </div>
        );
        return (
            <React.Fragment>
                <h1>a-MAZE-ing!</h1>
                {contents}
            </React.Fragment>
        );
    }
}
