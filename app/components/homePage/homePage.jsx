import React from 'react';
// import PropTypes from 'prop-types';
import image from '@image/cat.jpg';
import ModuleX from './moduleX/moduleX';


const HomePage = () => (
	<div>
		<h2>Home</h2>
		<img src={image} alt="" />
		<ModuleX test="jhjh j hjhkjkjk" />
	</div>
);

/*
HomePage.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
};
*/

export default HomePage;
