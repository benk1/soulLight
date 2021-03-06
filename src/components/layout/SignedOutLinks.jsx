import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks(props) {
	return (
		<ul className="right">
			<li>
				<NavLink to="/signup">Signup</NavLink>
			</li>
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
		</ul>
	);
}

export default SignedOutLinks;
