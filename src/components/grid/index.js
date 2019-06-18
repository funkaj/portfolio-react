import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import './styles.css';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	titleBar: {
		background:
			'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
			'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
	icon: {
		color: 'white',
	},
});

function AdvancedGridList(props) {
	const { classes } = props;
	const tileData = props.tileData;

	return (
		<div className={classes.root}>
			<GridList cellHeight={200} spacing={1} className={classes.gridList}>
				{tileData.map(tile => (
					<GridListTile
						className='gallery'
						key={tile.img}
						cols={tile.featured ? 2 : 1}
						rows={tile.featured ? 2 : 1}>
						<img
							src={props.hasWebP ? tile.img : tile.imgalt}
							alt={tile.title}
						/>

						<GridListTileBar
							title={tile.art ? tile.title : null}
							titlePosition='top'
							actionIcon={
								<div>
									{tile.art ? (
										<IconButton />
									) : (
										<div>
											<IconButton
												id='link-btn'
												href={tile.live}
												target='blank'
												className={classes.icon}>
												{tile.title}
											</IconButton>
											<IconButton
												id='link-btn'
												href={tile.github}
												target='blank'
												className={classes.icon}>
												<i className='fab fa-github-alt fa-lg' />
											</IconButton>
										</div>
									)}
								</div>
							}
							actionPosition='left'
							className={classes.titleBar}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

AdvancedGridList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);
