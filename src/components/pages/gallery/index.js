import React from 'react';
import Animation from '../../animation';
import AdvancedGridList from '../../grid';
import LazyLoad from 'react-lazy-load';

import './styles.css';

function Gallery(props) {
	const data = props.data;
	return (
		<div>
			<div id='wrapper'>
				<LazyLoad>
					<AdvancedGridList
						hasWebP={data.hasWebP}
						tileData={data.data}
						load={data.load}
						linkData={data.linkData}
					/>
				</LazyLoad>
				<Animation />
			</div>
		</div>
	);
}

export default Gallery;
