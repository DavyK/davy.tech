import React, { Component } from 'react';
import Cell from './Cell';


class Grid extends Component {
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();

        this.state = {
            containerWidth: 0,
            containerHeight: 0,
        };
    }

    componentDidMount() {
        this.setState({
            containerWidth: this.containerRef.current.clientWidth,
            containerHeight: this.containerRef.current.clientHeight,
        });
    }

    isAlive(x, y) {
        const cellStr = `pos-${x}-${y}`
        return this.props.alive.has(cellStr);
    }

    render() {
        const cells = [];
        let contents;

        const { size: nCols, size: nRows } = this.props;
        let row;
        let cols;
        for (let y = 0; y < nRows; y++) {
            cols = [];
            for (let x = 0; x < nCols; x++ ) {
                const activeClass = this.isAlive(x,y) ? ' alive' : ''
                cols.push(
                    <Cell
                        className={`life-grid-cell${activeClass}`}
                        key={`cell-${x}-${y}`}
                        pos={{ x, y }}
                        changeHandler={this.props.changeHandler}
                        interval={this.props.interval}
                        size={this.props.size}
                        containerWidth={this.state.containerWidth}
                        containerHeight={this.state.containerHeight}
                    />
                );
            }
            row = <div className="life-grid-row" key={`row-${y}`}>{cols}</div>
            cells.push(row);
        }
        contents = (
            <div className='life-grid' ref={this.containerRef}>
                {cells}
            </div>
        );

        return (
            <React.Fragment>
                {contents}
            </React.Fragment>
        );
    }
}

export default Grid;
