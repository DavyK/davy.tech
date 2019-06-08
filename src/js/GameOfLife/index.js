import React, { Component } from 'react';
import Controls from './Controls';
import Grid from './Grid';

/*
 TODO: implement a getNeighbours function to return the Neighbours of a given
       cell
 TODO: stop button
 TODO: input to control time interval
 TODO: tick() given the set of alive and dead cells, apply rules to calculate
       new set of alive and dead cells.
*/

function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function parseAliveStr(s) {
    const re = /^pos-(\d+)-(\d+)$/;
    const m = re.exec(s);
    return {
        x: parseInt(m[1]),
        y: parseInt(m[2]),
    };
}


const DEFAULT_STATE = {
    started: false,
    size: 10,
    initialCount: 50,
    generation: 0,
    interval: 500,
    alive: new Set(),
};

// TODO: initial count as %


class GoL extends Component {
    constructor(props){
        super(props);
        this.state = DEFAULT_STATE;
        this._timer = null;

        this.toggleAlive = this.toggleAlive.bind(this);
        this.startGame = this.startGame.bind(this);
        this.makeRandomBoard = this.makeRandomBoard.bind(this);
        this.changeInitialCountHandler = this.changeInitialCountHandler.bind(this);
        this.initializeBoard = this.initializeBoard.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.changeSizeHandler = this.changeSizeHandler.bind(this);
        this.reset = this.reset.bind(this);
        this.tick = this.tick.bind(this);
        this.changeIntervalHandler = this.changeIntervalHandler.bind(this);
    }

    getNeighbours(x, y) {
        const { size: nCols, size: nRows } = this.state;

        const hMin = x - 1 < 0 ? nCols - 1 : x - 1;
        const hMax = x + 1 === nCols ? 0 : x + 1;
        const neighbourCols = [hMin, x, hMax];

        const vMin = y - 1 < 0 ? nRows - 1 : y - 1;
        const vMax = y + 1 === nRows ? 0 : y + 1;
        const neighbourRows = [vMin, y, vMax];

        const neighbours = new Set();
        for (let i of neighbourCols){
            for (let j of neighbourRows){
                if (!(i === x && j === y)){
                    neighbours.add(`pos-${i}-${j}`);
                }
            }
        }

        return neighbours;
    }

    makeRandomBoard(numCells) {
        const { size: nCols, size: nRows } = this.state;

        const population = [];
        for(let y = 0; y < nRows; y++) {
            for (let x = 0; x < nRows; x++) {
                population.push(`pos-${x}-${y}`);
            }
        }

        function randomSample(sampleSet) {
           const idx = Math.floor(Math.random() * sampleSet.length);
           return sampleSet.splice(idx, 1)[0];
        }

        let cell;
        const cells = new Set();
        for (let n = 0; n < numCells; n++) {
            cell = randomSample(population);

            cells.add(cell);
        }
        this.setState({
            alive: cells,
        });
    }

    startGame() {
        if (!this.state.started) {
            this.setState({
                started: true,
            });

            this._timer = setInterval(() => this.tick(), this.state.interval);
        }
    }

    stopGame() {
        this.setState({
            started: false,
        });

        clearInterval(this._timer);
    }

    changeSizeHandler(event) {
        this.setState({
            size: parseInt(event.target.value),
        });
    }


    toggleAlive(x,y) {
        const cellStr = `pos-${x}-${y}`;
        const { alive } = this.state;
        if (alive.has(cellStr)) {
            alive.delete(cellStr);
        } else {
            alive.add(cellStr);
        }
        this.setState({
            alive,
        });
    }

    changeInitialCountHandler(event) {
        this.setState({
            initialCount: event.target.value,
        });

        this.makeRandomBoard(event.target.value);
    }

    initializeBoard () {
        this.setState({ alive: new Set(), generation: 0 });
        this.makeRandomBoard(this.state.initialCount);
    }

    reset() {
        this.setState({
            alive: new Set(),
            generation: 0,
            started: false,
        });
        clearInterval(this._timer)
    }

    changeIntervalHandler(event) {
        this.setState({
            interval: event.target.value,
        })
        clearInterval(this._timer);

        if (this.state.started) {
            this._timer = setInterval(() => this.tick(), event.target.value);
        }
    }

    tick() {
        const { alive, generation } = this.state;
        const { size: nCols, size: nRows } = this.state;
        const newAlive = new Set();
        for (let x = 0; x < nCols; x++){
            for (let y = 0; y < nCols; y++){
                const cellStr = `pos-${x}-${y}`;

                const neighbours = this.getNeighbours(x,y);
                const numAliveNeighbours = intersection(alive, neighbours).size;
                if (alive.has(cellStr)) {
                    // Don't Need to check for Rules 1 and 3 since the alive set
                    // starts of empty.
                    // RULE 2:
                    if (numAliveNeighbours === 2 || numAliveNeighbours === 3) {
                        newAlive.add(cellStr);
                    }
                } else {
                    // RULE 4:
                    if (numAliveNeighbours === 3) {
                        newAlive.add(cellStr);
                    }
                }
            }
        }
        this.setState({
            alive: newAlive,
            generation: generation + 1,
        })
    }

  render() {
    return (
      <div>
          <h3>Conway's Game of Life</h3>
          <div className="text-data">Generation: {this.state.generation}</div>
          <Grid
              alive={this.state.alive}
              changeHandler={this.toggleAlive}
              interval={this.state.interval}
              size={this.state.size}
          />
          <Controls
              initialCount={this.state.initialCount}
              changeInitialCountHandler={this.changeInitialCountHandler}
              initializeHandler={this.initializeBoard}
              startHandler={this.startGame}
              stopHandler={this.stopGame}
              size={this.state.size}
              changeSizeHandler={this.changeSizeHandler}
              resetHandler={this.reset}
              interval={this.state.interval}
              changeIntervalHandler={this.changeIntervalHandler}
              tickOnce={this.tick}
              started={this.state.started}
          />

      </div>
    );
  }
}

export default GoL;
