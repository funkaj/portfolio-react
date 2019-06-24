import React from 'react';
import IconButton from '@material-ui/core/IconButton';

function Icon(props) {
	const link = props.linkData;

	console.log('++++++++++++++++++++++++++++++++++');
	console.log(link);
	return (
		<div>
			<IconButton id='link-btn' href={link.link} target='blank'>
				<i className={`${link.icon} ${link.name}`} />
			</IconButton>
		</div>
	);
}

export default Icon;
