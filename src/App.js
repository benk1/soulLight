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
// import EnergyHealing from './components/services/EnergyHealing';
import OracleCards from './components/services/OracleCards';
import Blog from './components/pages/Blog';
import Introduction from './components/common/Introduction';
import EnergiaHoito from './components/services/EnergiaHoito';
import IntuitiivinenKanavointi from './components/services/IntuitiivinenKanavointi';

function App() {
	return (
		<>
			<Navbar />
			<Introduction />
			<div>
				<Switch>
					<Route exact path="/soulLight" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={SignIn} />
					<Route path="/signup" component={Signup} />
					<Route path="/newsletter" component={NewsLetter} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/logout" component={SignOut} />
					<Route path="/aanihaaruka" component={Cards} />
					<Route path="/energiaHoito" component={EnergiaHoito} />
					<Route path="/tarottulkinnat" component={OracleCards} />
					<Route
						path="/intuitiivinenkanavointi"
						component={IntuitiivinenKanavointi}
					/>
					<Route path="/blog" component={Blog} />
					<Route component={NotFound} />
					{/* <Redirect to="/not-found" /> */}
				</Switch>
			</div>
			<Footer />
		</>
	);
}

export default App;
