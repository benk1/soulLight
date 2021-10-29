import React from 'react';
import logo from '../../images/logo.png';

function About(props) {
	return (
		<div>
			<h3 className="text-blue lighten-3 about_header">This is About page</h3>
			<div className="image ">
				<img src={logo} alt="About logo" className="logo_12" />
			</div>
			<div>
				<p>
					Olen Maria Nurkkala. Kotoisin Kemistä ja Karjalaisilla sukujuurilla
					varustettu. Nykyään asustelen Vantaalla. Perustin Soul Light yrityksen
					oman henkisen havahtumisen jälkeen. Lapsiperhe arki toi mukanaan oman
					jaksamisen kanssa taistelua ja univaikeuksia. Koin voimakkaan
					unihalvaus kokemuksen, jonka jälkeen selvä-aistini alkoivat
					avautumaan. Olen harrastanut tarot kortteja 14-vuotiaasti asti ja
					ollut aina kiinnostunut unista, horoskoopeista, selvännäöstä, eri
					kulttuureista ja uskonnoista. Nuoresta asti unimaailmani on ollut
					vilkas ja olen myös nähnyt enneunia. Tunsin aina, että en jollain
					tapaa kuulunut mihinkään joukkoon tai koskaan ollut löytänyt sitä
					minun elämän kutsumusta. Kun aloin seuraamaan sydämeni ääntä ja omia
					intuitiivisia aistejani, niin löysin oman tieni. Kutsumukseni ihmisten
					auttamiseen energia parantamisen, tarot tulkinnan ja monipuolisen
					henkisen viestinnän kautta. Välitän viestit täydestä sydämmestä,
					valolla, rakkaudella ja luottamuksella. Toivon, että voin olla osa
					juuri sinun uniikkia matkaasi. Rakkauden ja valon terveisin, Maria
					-Soul Light- Feel with your heart
				</p>
			</div>
		</div>
	);
}

export default About;
