import React from 'react';

import Home from '../components/Home';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';

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
