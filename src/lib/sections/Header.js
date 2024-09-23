import React from 'react';

function Header({ activeTab, onTabClick }) {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: 1, display: "flex", justifyContent: "center"}}>
      <nav>
        <ul>
          <li onClick={() => onTabClick('About') } style={{ display: 'inline-block'}}>About</li>
          <li onClick={() => onTabClick('Buy')} style={{ display: 'inline-block'}}>Buy</li>
          <li onClick={() => onTabClick('Sell')} style={{ display: 'inline-block'}}>Sell</li>
          <li onClick={() => onTabClick('Contact')} style={{ display: 'inline-block'}}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;