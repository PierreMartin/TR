import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './css/main.css';
import AppDemo from './demo/App';
import NavigationMain from './components/navigation/navigationMain';
import registerServiceWorker from './registerServiceWorker';

// Without routing :
/*
ReactDOM.render(
  <AppDemo />,
  document.getElementById('root')
);
*/


// With routing :
ReactDOM.render(
  <Router>
    <div>
      <NavigationMain />
      <hr/>
    </div>
  </Router>,
  document.getElementById('root')
);


registerServiceWorker();