import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './styles.css';

// Nav component
const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

function ButtonAppBar(props) {
	const { classes } = props;
	console.log('==============NAV START==============');
	console.log(props);
	console.log('==============NAV END==============');
	// eslint-disable-next-line no-unused-vars
	const load = props.load;

	return (
		<div className={classes.root}>
			<AppBar id='navBar' position='static'>
				<Toolbar>
					<Typography variant='h4' className={classes.grow}>
						Adam Funk
					</Typography>
					<Button>
						<NavLink
							exact
							id='home'
							className='HOME'
							activeClassName='active'
							onClick={props.handleSwitchData}
							to='/'>
							Home
						</NavLink>
					</Button>
					<Button>
						<NavLink
							id='illustration'
							className='ILL_DATA'
							activeClassName='active'
							onClick={props.handleSwitchData}
							to='/gallery/illustration'>
							Illustration
						</NavLink>
					</Button>
					<Button>
						<NavLink
							id='web-development'
							className='DEV_DATA'
							activeClassName='active'
							onClick={props.handleSwitchData}
							to='/gallery/web-development'>
							Web Development
						</NavLink>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
