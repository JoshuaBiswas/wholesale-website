import React from 'react';

function Footer({ activeTab, onTabClick }) {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: 1 }}>
      <nav>
        <ul>
          <li onClick={() => onTabClick('Sell')}>Sell</li>
          <li onClick={() => onTabClick('Buy')}>Buy</li>
          <li onClick={() => onTabClick('About')}>About</li>
          <li onClick={() => onTabClick('Contact')}>Contact</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;