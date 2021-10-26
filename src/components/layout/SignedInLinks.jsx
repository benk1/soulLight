import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks(props) {
	return (
		<ul className="right navLinks">
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/about">About</NavLink>
			</li>

			<li>
				<NavLink to="/newsletter">News Letter</NavLink>
			</li>
			<li>
				<NavLink to="/calendar">Calendar</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact</NavLink>
			</li>
			<li>
				<NavLink to="/logout">Log Out</NavLink>
			</li>

			<li>
				<NavLink to="/" className="btn btn-floating pink lighten-1">
					BK
				</NavLink>
			</li>
		</ul>
	);
}

export default SignedInLinks;
