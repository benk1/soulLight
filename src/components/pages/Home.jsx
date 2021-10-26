import React from 'react';
import classes from './Home.module.css';
import homelogo from '../../images/soul-light-logo.jpg';

function Home(props) {
	return (
		<div className="homePage">
			<h3 className={classes.home_header}>Welcome To Soul Light Home Page</h3>
			<div className={classes.home}>
				<div>
					<div className="image">
						<img src={homelogo} alt="homelogo" className="logo_1" />
					</div>

					<p>
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
			</div>
		</div>
	);
}

export default Home;
