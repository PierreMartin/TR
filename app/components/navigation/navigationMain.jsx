import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMain = () => (
	<div>
		<ul>
			<li><Link to="/" href="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/courses">courses</Link></li>
		</ul>
	</div>
);

export default NavigationMain;
