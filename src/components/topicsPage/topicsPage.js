import React from 'react';
import {Route, Link} from 'react-router-dom';
import TopicPage from '../topicPage/topicPage';

const TopicsPage = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/1`}>topic 1</Link></li>
      <li><Link to={`${match.url}/2`}>topic 2</Link></li>
      <li><Link to={`${match.url}/3`}>topic 3</Link></li>
    </ul>

    {/*
    <Route path={`${match.path}/:1`} component={Topic1Page}/>
    <Route path={`${match.path}/:2`} component={Topic2Page}/>
    <Route path={`${match.path}/:3`} component={Topic3Page}/>
    */}

    <Route path={`${match.path}/:topicId`} component={TopicPage}/>

    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

export default TopicsPage;