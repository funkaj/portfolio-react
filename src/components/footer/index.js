import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MyIcon from '../icon/icons';
import './styles.css';

const styles = {};

function Footer(props) {
	const { classes } = props;
	const value = props.value;

	return (
		<BottomNavigation
			id='bottom-mobile-nav'
			value={value}
			onChange={props.handleLink}
			showLabels
			className={classes.root}>
			<BottomNavigationAction
				label='Github'
				icon={<MyIcon id='bottomGithub' linkData={props.linkData[0]} />}
			/>
			<BottomNavigationAction
				label='LinkedIn'
				icon={<MyIcon id='bottomLinkedIn' linkData={props.linkData[1]} />}
			/>
			<BottomNavigationAction
				label='Email'
				id='bottomContact'
				icon={
					<MyIcon
						id='bottomContact'
						linkData={props.linkData[2]}
						target='_top'
					/>
				}
			/>
		</BottomNavigation>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
