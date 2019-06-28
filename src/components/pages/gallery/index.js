import React from 'react';
import Animation from '../../animation';
import AdvancedGridList from '../../grid';

import './styles.css';

// Component to build out the grid for the gallery
function Gallery(props) {
	const data = props.data;

	return (
		<div>
			<div id='wrapper'>
				<AdvancedGridList
					hasWebP={data.hasWebP}
					tileData={data.data}
					load={data.load}
					linkData={data.linkData}
				/>
				<Animation />
			</div>
		</div>
	);
}

export default Gallery;
