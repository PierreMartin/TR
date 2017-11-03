import React from 'react';
// import PropTypes from 'prop-types';
import image from '@image/cat.jpg';
import ModuleX from './moduleX/moduleX';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmitMessage = this.handleSubmitMessage.bind(this);

		this.state = {
			textChange: '',
			text: ''
		};
	}

	componentDidMount() {
		// this.log('componentDidMount');
	}

	componentDidUpdate() {
		this.log('componentDidUpdate');
	}

	handleChangeMessage(event) {
		const textChange = event.target.value.trim();
		this.setState({ textChange });
		this.log('handleChangeMessage');
	}

	handleSubmitMessage(event) {
		if (event.which === 13) {
			event.preventDefault();

			const text = event.target.value.trim();
			this.setState({ text });
			this.setState({ textChange: '' });
			this.log('handleSubmitMessage');
		}
	}

	log(componant) {
		console.log(componant, this.state);
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<img src={image} alt="cat" />

				<ModuleX
					placeholder="Write something here"
					handleChangeMessage={this.handleChangeMessage}
					handleSubmitMessage={this.handleSubmitMessage}
					value={this.state.textChange}
				/>
				<p>{ this.state.text }</p>

			</div>
		);
	}
}

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
