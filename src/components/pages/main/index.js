import React, { Component } from 'react';
import ImageLoader from '../../animation/imageloader';
import LazyLoad from 'react-lazy-load';
import './styles.css';

class Splash extends Component {
	render() {
		return (
			<div>
				<div id='mainImg'>
					<LazyLoad onContentVisible={() => console.log('lazyloaded!')}>
						<ImageLoader src='images/jpg/ninja1.jpg' alt='ninja' />
						<ImageLoader src='images/webp/ninja1.webp' alt='ninja' />
					</LazyLoad>
					<div id='brand'>
						<div className='name'>Adam</div>
						<div className='name'>Funk</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Splash;
