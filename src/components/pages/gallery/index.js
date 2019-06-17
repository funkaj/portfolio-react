import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../../nav';
import AdvancedGridList from '../../grid';
import { devData } from '../../data/devData';
import { illustrationData } from '../../data/illustrationData';
import { DEV_DATA, ILL_DATA } from '../../constants/constants';
import './styles.css';

class Gallery extends Component {
	state = {
		hasWebP: false,
		load: true,
		data: devData,
	};

	async componentDidMount() {
		const state = this.state;
		//to see if feature is availible in browser
		// eslint-disable-next-line no-unused-vars
		function checkImg() {
			let img = new Image();
			img.onload = function() {
				state.hasWebP = true;
				console.log(state);
			};
			img.onerror = function() {
				state.hasWebP = false;
				console.log(state);
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
				<div id='wrapper'>
					<Paper>
						<AdvancedGridList
							hasWebP={state.hasWebP}
							tileData={state.data}
							load={state.load}
						/>
					</Paper>
				</div>
			</div>
		);
	}
}

export default Gallery;
