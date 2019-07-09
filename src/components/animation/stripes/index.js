import React from 'react';
import Grid from '@material-ui/core/Grid';
import './keyframes.css';
import './style.css';

// animation component for gallery pages
function Animation() {
	return (
		<div className='absolute'>
			<Grid container spacing={0}>
				<Grid item sm={4}>
					<div id='left-line-container'>
						<div className='left-left-line line' />
						<div className='left-center-line line' />
						<div className='left-right-line line' />
					</div>
				</Grid>
				<Grid item sm={4}>
					<div id='line-container'>
						<div className='left-line line' />
						<div className='center-line line' />
						<div className='right-line line' />
					</div>
				</Grid>
				<Grid item sm={4}>
					<div id='right-line-container'>
						<div className='right-left-line line' />
						<div className='right-center-line line' />
						<div className='right-right-line line' />
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Animation;
