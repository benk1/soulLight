import React from 'react';
import logo from '../../images/logo.png';

function About(props) {
	return (
		<div>
			<h3 className="text-blue lighten-3">This is About page</h3>
			<img src={logo} alt="About logo" />
		</div>
	);
}

export default About;
