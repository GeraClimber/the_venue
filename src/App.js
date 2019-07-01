import React from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';



import {Header, Footer, Location, Pricing, Featured, VenueNfo, Highlights} from './components';

function App() {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venuenfo">
        <VenueNfo/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="pricing">
        <Pricing/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>

      <Footer/>
    </div>
  );
}

export default App;
