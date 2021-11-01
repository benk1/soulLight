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
				<NavLink
					to="/newsletter"
					className="dropdown-trigger"
					data-target="dropdown1"
				>
					Services
				</NavLink>

				<ul id="dropdown1" className="dropdown-content">
					<li>
						<NavLink to="/cards">Cards Reading</NavLink>
					</li>
					<li>
						<NavLink to="/energyHealing">Energy Healing</NavLink>
					</li>
					<li className="divider" tabindex="-1"></li>
					<li>
						<NavLink to="oracleCards">Oracle Cards Reading</NavLink>
					</li>
				</ul>
			</li>

			<li>
				<NavLink to="/blog">Blog</NavLink>
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
