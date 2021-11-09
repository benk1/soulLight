import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Contact.module.css';
import emailjs from 'emailjs-com';
// import { init } from 'emailjs-com';
// init('user_H1P8uG9UBTW33HLZWc0wo');

function Contact(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		// const { name, email, message } = data;
		// if (name && email && message) {
		// 	// const serviceId = 'service_i1odjyu';
		// 	const serviceId = 'gmail';
		// 	const templateId = 'template_ogyzp2s';
		// 	// const templateId = process.env.REACT_APP_TEMPLATE_ID;
		// 	const userId = 'user_H1P8uG9UBTW33HLZWc0wo';
		// 	// const userId = process.env.REACT_APP_USER_ID;
		const templateParams = {
			name,
			email,
			message,
		};

		emailjs
			.send(
				'gmail',
				'template_ogyzp2s',
				'user_H1P8uG9UBTW33HLZWc0wo',
				templateParams
			)
			.then((response) => console.log(response))
			.then((error) => console.log(error));
		//Todo -send mail
		setName('');
		setEmail('');
		setMessage('');
		setEmailSent(true);
	};

	const isValidEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};
	return (
		<div className={`row container ${classes.row_container}`}>
			<div className="container center-align">
				<h3 className="text-blue lighten-3">Contact Me</h3>
			</div>
			<div className={`center-align ${classes.contact_wrapper}`}>
				<form className="col s12 center-align" onSubmit={handleSubmit}>
					<div className="row">
						<div className="input-field col s6">
							<input
								id="first_name"
								value={name}
								type="text"
								onChange={(e) => setName(e.target.value)}
							/>
							<label className="black-text darken-5" htmlFor="first_name">
								{' '}
								Name
							</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input
								id="email"
								value={email}
								type="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label className="black-text darken-5" htmlFor="first_name">
								{' '}
								Email
							</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<textarea
								id="message"
								value={message}
								type="text"
								className={classes.materializeTextarea}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<label className="black-text darken-5" htmFor="message">
								Message
							</label>
						</div>
					</div>
					<button className="waves-effect waves-light btn-large">Send</button>
					<span className={emailSent ? 'visible' : null}>
						Thank you for your message, we will be in touch as soon as possible!
					</span>
				</form>
			</div>
		</div>
	);
}

export default Contact;
