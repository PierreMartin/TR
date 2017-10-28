import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../homePage/homePage';
import About from '../aboutPage/aboutPage';
import Topics from '../topicsPage/topicsPage';

const NavigationMain = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
);

export default NavigationMain;