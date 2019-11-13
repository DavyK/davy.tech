import React, { Component } from 'react';
import cubes from './cubes';


class Pll extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cubes: cubes,
      currentCube: null,
      displayAlgo: true,
    };

    this.setRandomCube = this.setRandomCube.bind(this);
    this.toggleAlgo = this.toggleAlgo.bind(this);
  }

  componentDidMount() {
    this.setRandomCube();
  }

  setRandomCube() {
    const cubeNames = Object.keys(this.state.cubes);
    const idx = Math.floor(Math.random() * cubeNames.length);
    const randomCube = this.state.cubes[cubeNames[idx]]
    this.setState({
      currentCube: randomCube,
    });
  }

  toggleAlgo() {
    this.setState({
      displayAlgo: !this.state.displayAlgo,
    });
  }

  render() {
    return (
      <div className='cube-container'>
        {this.state.currentCube && (
            <React.Fragment>
              <h2>{this.state.currentCube.name}</h2>
              <div className='cube-img-container'>
                <img className='cube-img' src={this.state.currentCube.img} />
              </div>
              <div className='cube-algo-container'>
                {this.state.displayAlgo && <p>{this.state.currentCube.algo}</p>}
              </div>
              <div className='cube-controls'>
                <button style={{ marginRight: '5px'}} onClick={this.setRandomCube}>Next Cube</button>
                <button onClick={this.toggleAlgo}>
                  {`${this.state.displayAlgo ? "Hide" : "Show" } Algorithm`}
                </button>
              </div>
            </React.Fragment>
        )}
      </div>
    );
  }
};

export default Pll;


