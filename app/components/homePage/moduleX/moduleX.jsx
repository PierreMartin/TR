import React from 'react';
import PropTypes from 'prop-types';

const ModuleX = ({ placeholder, handleChangeMessage, handleSubmitMessage, value }) => (
	<div>
		<input
			type="text"
			onChange={handleChangeMessage}
			onKeyDown={handleSubmitMessage}
			value={value}
			placeholder={placeholder}
		/>
	</div>
);

ModuleX.propTypes = {
	placeholder: PropTypes.string.isRequired,
	handleChangeMessage: PropTypes.func.isRequired,
	handleSubmitMessage: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default ModuleX;
