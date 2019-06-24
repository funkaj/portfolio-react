import React, { Component } from 'react';
import Gallery from '../gallery';
import Animation from '../../animation';

class Layout extends Component {
	render() {
		return (
			<div>
				<Gallery />
				<Animation />
			</div>
		);
	}
}

export default Layout;
