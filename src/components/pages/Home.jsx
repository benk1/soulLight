import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Home.module.css';
import homelogo from '../../images/soul-light-logo.jpg';
import ilokuva from '../../images/Sinä.jpg';

function Home(props) {
	return (
		<div className={`container ${classes.home_wrapper}`}>
			<div className={classes.bookAppointment}>
				<h3 className={classes.home_header1}>
					Ben Kakengi, Bsc.-Software Engineer
				</h3>
				<NavLink
					to="/calendar"
					className="waves-effect waves-light btn-large blue darken-5 left appoinmentbtn"
				>
					Book Appointment
				</NavLink>
			</div>
			<div className={`row ${classes.wrapper}`}>
				<div className={`col s6 ${classes.contentsDiv}`}>
					<h3 className={classes.home_header2}>Feel it with your soul</h3>
					<p className={classes.paragraph}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
						nihil iusto alias, necessitatibus sint sit provident dolore aliquid
						quisquam. Culpa soluta ipsum nihil, numquam ullam quam architecto id
						maxime dolorum!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugit
						blanditiis excepturi hic nam reiciendis! Expedita, veniam quidem
						porro delectus nobis sapiente dolorem similique, sequi, totam sit
						sint voluptatum commodi.
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at
						laboriosam magnam cumque praesentium, tenetur iure. Quo voluptas
						alias molestiae fuga sunt eum, deserunt odio, ducimus amet error
						quam dolorum.
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
						quis accusamus ab aspernatur a sed debitis, in veniam non libero ut
						totam. Minima ad dolorum modi dolore et quaerat necessitatibus?
					</p>
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
