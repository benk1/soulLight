import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks(props) {
	return (
		<ul className="right navLinks">
			<li>
				<NavLink exact to="/soulLight">
					Home
				</NavLink>
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
						<NavLink className="blue-text darken-5" to="/aanihaaruka">
							Äänihaaruka Hoito
						</NavLink>
					</li>
					<li>
						<NavLink className="blue-text darken-5" to="/energiaHoito">
							Energia Hoito
						</NavLink>
					</li>
					<li className="divider" tabindex="-1"></li>
					<li>
						<NavLink
							className="blue-text darken-5"
							to="/intuitiivinenkanavointi"
						>
							Intuitiivinen Kanavointi
						</NavLink>
					</li>

					<li>
						<NavLink className="blue-text darken-5" to="/tarottulkinnat">
							Tarot Tulkinnat
						</NavLink>
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
				<NavLink to="/soulLight" className="btn btn-floating pink lighten-1">
					BK
				</NavLink>
			</li>
		</ul>
	);
}

export default SignedInLinks;
