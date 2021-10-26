import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
	return (
		<footer className="page-footer grey darken-4  ">
			<div className="container icons">
				<div className="footer-copyright">
					<b>© 2021 Copyright Soul Light.</b>Soul Light is not responsible of
					external sites.
				</div>

				<div className="iconLinks">
					<ul className="iconImage">
						<li>
							<Link to="/http://www.linkedin.com/in/bernard-kakengi-ba2003173"></Link>
						</li>
						<li>
							<Link to="#" className="grey-text text-lighten-3">
								<i className="material-icons medium white-text facebook ">
									facebook
								</i>
							</Link>
						</li>
						<li>
							<Link to="#" className="grey-text text-lighten-3">
								<i className="material-icons medium white-text facebook ">
									facebook
								</i>
							</Link>
						</li>
						<li>
							<Link to="#" className="grey-text text-lighten-3">
								<i className="material-icons medium white-text facebook ">
									facebook
								</i>
							</Link>
						</li>
					</ul>
				</div>
				
			</div>
		</footer>
	);
}

export default Footer;

<div className="container">
	<div className="row">
		{/* <div className="col l6 s12">
						<h5 className="white-text">Footer Content</h5>
						<p className="grey-text text-lighten-4">
							You can use rows and columns here to organize your footer content.
						</p>
					</div> */}
		{/* <div className="col l4 offset-l2 s12 "></div> */}
	</div>
</div>;
