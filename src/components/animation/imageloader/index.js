import React, { Component } from 'react';
import './styles.css';
const _isLoaded = {};

class ImageLoader extends Component {
	//initial state: image loaded stage
	state = {
		isLoaded: _isLoaded[this.props.src],
	};

	//define our loading and loaded image classes
	static defaultProps = {
		className: '',
		loadingClassName: 'img-loading',
		loadedClassName: 'img-loaded',
	};

	//image onLoad handler to update state to loaded
	onLoad = () => {
		_isLoaded[this.props.src] = true;
		this.setState(() => ({ isLoaded: true }));
	};

	render() {
		// eslint-disable-next-line no-unused-vars
		let { className, loadedClassName, loadingClassName, ...props } = this.props;
		console.log(this.props);

		className = `${className} ${
			this.state.isLoaded ? loadedClassName : loadingClassName
		}`;

		return (
			// eslint-disable-next-line jsx-a11y/alt-text
			<img
				src={this.props.src}
				onClick={this.props.onClick}
				className={className}
				onLoad={this.onLoad}
			/>
		);
	}
}

export default ImageLoader;
