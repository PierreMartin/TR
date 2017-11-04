import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './navigation/navigationMain';
import Home from './homePage/homePage';
import About from './aboutPage/aboutPage';
import CoursesPage from './coursesPage/coursesPage';

const App = () => {
	return (
		<div>
			<Navigation />
			<hr />

			<div className="layoutComponent">
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/courses" component={CoursesPage} />
			</div>
		</div>
	);
};


export default App;
