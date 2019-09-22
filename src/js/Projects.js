import React from 'react';
import { Link } from "react-router-dom";

const Projects = () => (
  <React.Fragment>
    <h2>Other work</h2>
    <p>This is a collection of stuff that I have tinkered with or made over the years</p>
    <ul className="project-list">
      <li>This site!</li>
      <li><Link to='/gol'>Conway's game of life</Link></li>
      <li><Link to='/pll'>Rubik's cube PLL memorisation aide</Link></li>
      <li><a href="https://github.com/DavyK/pygame-examples/">Maze building and path finding with python and pygame</a></li>
      <li>
        <p><a href="https://pyweek.org/">Pyweek</a> Entries:</p>
        <ul>
          <li><a href="https://pyweek.org/e/KA/">Destination Irrelevant</a></li>
          <li><a href="https://pyweek.org/e/KAP/">Cultivate</a></li>
        </ul>
      </li>
    </ul>
  </React.Fragment>
);

export default Projects;
