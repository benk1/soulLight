import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Home.module.css';
import homelogo from '../../images/soul-light-logo.jpg';
import ilokuva from '../../images/Sinä.jpg';

function Home(props) {
	return (
		<div className={`container ${classes.home_wrapper}`}>
			<div className={`row ${classes.wrapper}`}>
				<div className={`col s6 ${classes.contentsDiv}`}>
					<h3 className={classes.home_header2}>Feel it with your soul</h3>
					<div className={classes.paragraph}>
						<h4>Sielun ja mielen hyvinvointipalvelut</h4>
						<h4>Kaikki mitä tarvitset löytyy sydämmestäsi</h4>
						<ul>
							<NavLink to="/energiahoito">
								<div className={classes.links}>
									<i class="fa fa-link medium" aria-hidden="true"></i>{' '}
									<li>Energiahoito</li>
								</div>
							</NavLink>
							<NavLink to="/aanihaarukka">
								<div className={classes.links}>
									<i class="fa fa-link medium" aria-hidden="true"></i>{' '}
									<li>Äänihaarukka hoito</li>
								</div>
							</NavLink>
							<NavLink to="/tarottulkinnat">
								<div className={classes.links}>
									<i class="fa fa-link medium" aria-hidden="true"></i>
									<li>Tarot tulkinnat</li>
								</div>
							</NavLink>

							<NavLink to="/intuitiivinenkanavointi">
								<div className={classes.links}>
									<i class="fa fa-link medium" aria-hidden="true"></i>
									<li>Intuitiivinen kanavointi</li>
								</div>
							</NavLink>
						</ul>{' '}
					</div>
				</div>
				<div className={`col s6  ${classes.imageDiv}`}>
					<div className={classes.cardImage}>
						<img src={ilokuva} alt="homelogo" className={classes.home_logo} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
