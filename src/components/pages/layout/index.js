import React, { Component } from 'react';

import { devData } from '../../data/devData';
import { linkData } from '../../data/links';
import { illustrationData } from '../../data/illustrationData';
import { DEV_DATA, ILL_DATA, HOME } from '../../constants/constants';
import PrimarySearchAppBar from '../../nav';
import Gallery from '../gallery';
import Contact from '../../contactnav';
import Footer from '../../footer';
import './styles.css';

// Layout for all components
class Layout extends Component {
	state = {
		pageLink: '/',
		hasWebP: false,
		load: false,
		data: '',
		linkData,
		value: 0,
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

	handleLink = (event, value) => {
		this.setState({ value });
	};

	handleSwitchData = e => {
		const state = this.state;
		switch (e.target.className) {
			case DEV_DATA:
				this.setState({ load: true });
				this.setState({ data: '' });
				this.setState({ data: devData });
				return state;
			case ILL_DATA:
				this.setState({ load: false });
				this.setState({ data: '' });
				this.setState({ data: illustrationData });
				return state;
			case HOME:
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
				<PrimarySearchAppBar
					handleSwitchData={this.handleSwitchData}
					load={state.load}
				/>
				<Contact linkData={state.linkData} />
				{!state.load && !state.data ? (
					<div id='mainImg'><img src='/images/png/ninja1.png' alt='ninja' /></div>
				) : (
					<Gallery data={state} />
				)}
				<Footer
					handleLink={this.handleLink}
					linkData={state.linkData}
					value={state.value}
				/>
			</div>
		);
	}
}

export default Layout;
