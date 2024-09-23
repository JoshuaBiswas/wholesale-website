import React from 'react';
import About from './mainContent/About';
import Buy from './mainContent/Buy';
import Sell from './mainContent/Sell';
import Contact from './mainContent/Contact';

function MainContent({ activeTab }) {
  switch (activeTab) {
    case 'About':
      return <About />;
    case 'Buy':
      return <Buy />;
    case 'Sell':
      return <Sell />;
    case 'Contact':
      return <Contact />;
    default:
      return null;
  }
}

export default MainContent;