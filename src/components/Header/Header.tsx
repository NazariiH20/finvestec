import React, { useState } from 'react';

import Logo from '../../images/Logo.svg';
import './Header.scss';

interface HeaderProps {
  scrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className='logo-content'>
        <div className='burger' onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Über uns</li>
          <li>Was wir bieten</li>
          <li>Aktuelle Stellenangebote</li>
        </ul>
      </nav>
      <div className='kontakt'>
        <button onClick={scrollToContact}>Kontakt</button>
      </div>
    </header>
  );
};

export default Header;
