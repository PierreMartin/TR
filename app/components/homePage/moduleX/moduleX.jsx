import React from 'react';
import PropTypes from 'prop-types';

const ModuleX = ({ test }) => (
	<div>
		<strong>{test}</strong>
	</div>
);

ModuleX.propTypes = {
	test: PropTypes.string.isRequired
};

export default ModuleX;
