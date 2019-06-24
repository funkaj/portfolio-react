import React, { Component } from 'react';
import { devData } from '../../data/devData';
import { linkData } from '../../data/links';
import { illustrationData } from '../../data/illustrationData';
import { DEV_DATA, ILL_DATA, HOME } from '../../constants/constants';
import ButtonAppBar from '../../nav';
import Gallery from '../gallery';
import MyIcon from '../../icon/icons';
import './styles.css';

class Layout extends Component {
	state = {
		hasWebP: false,
		load: false,
		data: '',
		linkData,
	};

	async componentDidMount() {
		const state = this.state;
		//to see if feature is availible in browser
		// eslint-disable-next-line no-unused-vars
		function checkImg() {
			let img = new Image();
			img.onload = function() {
				state.hasWebP = true;
			};
			img.onerror = function() {
				state.hasWebP = false;
			};
			img.src = 'http://www.gstatic.com/webp/gallery/1.webp';
		}
		await checkImg();
	}

	handleSwitchData = e => {
		const state = this.state;

		switch (e.target.className) {
			case DEV_DATA:
				this.setState({ load: true });
				this.setState({ data: devData });
				return state;
			case ILL_DATA:
				this.setState({ load: false });
				this.setState({ data: illustrationData });
				return state;
			case HOME:
				this.setState({ load: false });
				this.setState({ load: false });
				this.setState({ data: '' });
				return state;
			default:
				return state;
		}
	};

	render() {
		const state = this.state;
		return (
			<div>
				<ButtonAppBar
					handleSwitchData={this.handleSwitchData}
					load={state.load}
				/>
				<div id='icon-container'>
					<MyIcon linkData={state.linkData[0]} />
					<MyIcon linkData={state.linkData[1]} />
					<MyIcon linkData={state.linkData[2]} target='_top' />
				</div>
				{!state.load && !state.data ? (
					<div id='mainImg' />
				) : (
					<Gallery data={state} />
				)}
			</div>
		);
	}
}

export default Layout;
