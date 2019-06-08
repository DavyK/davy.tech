import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import GameOfLife from './GameOfLife';
import '../sass/index.scss';
import github from '../../static/images/github.png';
import linkedin from '../../static/images/linkedin.png';

const Intro = () => (
  <div>
    <h2>Hello.</h2>
    <section>
      <p>I'm a software engineer, and I like building things.</p>
      <ul className="nav-buttons list-unstyled">
        <li><Link className="btn btn-outline-primary" to="/about">Read more about Davy</Link></li>
        <li><Link className="btn btn-outline-primary" to="/timeline">Look at Davy's kinda C.V.</Link></li>
        <li><Link className="btn btn-outline-primary" to="/projects">See other projects</Link></li>

      </ul>
    </section>
    <section className="footer">
      "It is possible to commit no mistakes and still loose. That is not a weakness. That is life." - <span className="quote-author">Capt. Jean Luc Picard.</span>
    </section>
  </div>
);

const NotFound = () => (
  <div>
    <h2>hmmm...</h2>
    <div>
      <iframe
        className="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/e3-5YC_oHjE?start=65"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </div>

  </div>
);

const AppRouter = () => (
  <Router>
    <header>
      <nav>
        <span className="site-logo">
          <Link to="/">Davy Kavanagh</Link>
        </span>
        <ul className="nav-icon-list">
          <li><a href="https://github.com/DavyK"><img className="nav-icon" src={github} /></a></li>
          <li><a href="https://www.linkedin.com/in/david-kavanagh-95706342/"><img className="nav-icon" src={linkedin} /></a></li>
        </ul>
      </nav>
    </header>
    <article className="main-content">
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/about" component={About} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/projects" component={Projects} />
        <Route path="/gol" component={GameOfLife} />
        <Route component={NotFound} />
      </Switch>
    </article>
  </Router>
);

  ReactDOM.render(<AppRouter />, document.getElementById('root'));
