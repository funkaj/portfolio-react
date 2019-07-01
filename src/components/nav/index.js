import React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/MoreVert';
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
	const art = props;
	const { classes } = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	console.log(art);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}
	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<div>
			{/* mobile start*/}
			<Menu
				id={mobileMenuId}
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<div>
					<MenuItem className='menuBg' onClick={handleClose}>
						<NavLink
							exact
							id='home'
							className='HOME'
							activeClassName='active'
							onClick={props.handleSwitchData}
							to='/'>
							Home
						</NavLink>
					</MenuItem>
					<MenuItem className='menuBg' onClick={handleClose}>
						<NavLink
							id='illustration'
							className='ILL_DATA'
							activeClassName='active'
							onClick={props.handleSwitchData}
							to='/gallery/illustration'>
							Illustration
						</NavLink>
					</MenuItem>
					<MenuItem className='menuBg' onClick={handleClose}>
						<NavLink
							id='web-development'
							className='DEV_DATA'
							activeClassName='active'
							onClick={props.handleSwitchData}
							to='/gallery/web-development'>
							Web Development
						</NavLink>
					</MenuItem>
				</div>
			</Menu>
			{/* mobile end */}
		</div>
	);
	return (
		<div className={classes.root}>
			<AppBar id='navBar' position='static'>
				<Toolbar className='navLink'>
					<Typography id='title' variant='h3' className={classes.grow}>
						Adam Funk
					</Typography>
					<div className='sectionDesktop'>
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
					</div>
					<div className='sectionMobile'>
						<IconButton
							aria-label='Show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleClick}
							color='inherit'>
							<MoreIcon />
						</IconButton>
					</div>
					{renderMobileMenu}
				</Toolbar>
			</AppBar>
		</div>
	);
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);