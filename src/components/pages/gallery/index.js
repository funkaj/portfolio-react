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
		load: true,
		data: devData,
	};

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
						<AdvancedGridList tileData={state.data} />
					</Paper>
				</div>
			</div>
		);
	}
}

export default Gallery;
