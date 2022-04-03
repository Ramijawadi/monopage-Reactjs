

import React from 'react';
import Feature from './components/Feature';
import Header from './components/Header';
import About from './components/About';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Presentation from './components/Presentation';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
    <Header />
    <Feature />
    <About  image={aboutimage} title='comes with all Need for Daily life' button='Get the App' />
    <Presentation />
    <About  image={aboutimage1} title='Download and Get the App Now' button='Download' />
    <Contact />
    </div>
  );
}

export default App;
