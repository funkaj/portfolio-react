import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import './styles.css';

class Splash extends Component {
	render() {
		return (
			<div>
				<LazyLoad onContentVisible={() => console.log('lazyloaded!')}>
					<div id='mainImg'>
						<div id='brand'>
							<div className='name'>Adam</div>
							<div className='name'>Funk</div>
						</div>
					</div>
				</LazyLoad>
			</div>
		);
	}
}

export default Splash;
