import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
// import Footer from '../components/Footer';

export default function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}
