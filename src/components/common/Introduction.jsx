import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './Introduction.module.css';

function Introduction(props) {
	return (
		<div className={`container ${classes.bookAppointment}`}>
			<h3 className={classes.home_header1}>
				Ben Kakengi, Bsc.-Software Engineer
			</h3>
			<NavLink
				to="/calendar"
				className="waves-effect waves-light btn-large blue darken-5 white-text text-darken-5  appointmentbtn"
			>
				Book Appointment
			</NavLink>
		</div>
	);
}

export default Introduction;
