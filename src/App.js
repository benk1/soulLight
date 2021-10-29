import Navbar from './components/layout/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignIn from './components/pages/SignIn';
import Signup from './components/pages/Signup';
import NewsLetter from './components/pages/NewsLetter';
import Calendar from './components/pages/Calendar';
import SignOut from './components/pages/SignOut';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';
import Cards from './components/services/Cards';
import EnergyHealing from './components/services/EnergyHealing';
import OracleCards from './components/services/OracleCards';

function App() {
	return (
		<>
			<Navbar />
			<div className="container ">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={SignIn} />
					<Route path="/signup" component={Signup} />
					<Route path="/newsletter" component={NewsLetter} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/logout" component={SignOut} />
					<Route path="/cards" component={Cards} />
					<Route path="/energyHealing" component={EnergyHealing} />
					<Route path="/oracleCards" component={OracleCards} />
					<Route path="/not-found" component={NotFound} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
			<Footer />
		</>
	);
}

export default App;
