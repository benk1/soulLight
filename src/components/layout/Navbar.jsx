import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
// import soulLogo from '../../images/soulLogo.png';

function Navbar(props) {
	return (
		<nav>
			<div className="nav-wrapper  grey darken-5">
				<Link to="/" className="brand-logo ">
					{/* <img src={soulLogo} className="soulLogo" alt="soul Light logo" /> */}
				</Link>
				<SignedInLinks />
				{/* <SignedOutLinks /> */}
			</div>
		</nav>
	);
}

export default Navbar;
