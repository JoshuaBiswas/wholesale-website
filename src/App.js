import React, { useState } from 'react';
import Header from './lib/sections/Header';
import MainContent from './lib/sections/MainContent';
import Footer from './lib/sections/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('About');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Header activeTab={activeTab} onTabClick={handleTabClick} />
      <MainContent activeTab={activeTab} />
      <Footer activeTab={activeTab} onTabClick={handleTabClick} />
    </div>
  );
}

export default App;