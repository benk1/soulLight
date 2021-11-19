import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
// import soulLogo from '../../images/soulLogo.png';
import classes from './Navbar.module.css';

function Navbar(props) {
	return (
		<nav>
			<div className="nav-wrapper  grey darken-5">
				{/* <Link to="/" className={classes.brand}>
					<h1>Soul Light</h1>
				</Link> */}
				<SignedInLinks />
				{/* <SignedOutLinks /> */}
			</div>
		</nav>
	);
}

export default Navbar;
