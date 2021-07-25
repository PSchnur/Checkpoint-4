import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SitePage from './screen/SitePage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SitePage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
