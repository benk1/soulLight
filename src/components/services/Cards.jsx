import React from 'react';

import { NavLink } from 'react-router-dom';

function Cards(props) {
	return (
		<div className="row wrapper">
			<div className="col s4 m3 pull-s2 list-group">
				<NavLink to="/calendar" className="btn-large blue darken-5 left">
					Book Appointment
				</NavLink>
			</div>
			<h3>This is a page about Cards Reading</h3>
		</div>
	);
}

export default Cards;
