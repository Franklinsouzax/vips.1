import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css'; // Importe o arquivo de estilos local
import logo from '../logo/logo.png'

function BurgerMenu() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <div>
      <nav className='barraburger' onClick={toggleMenu}>
        <img src={logo} className='logo' alt='logo'/>
        <div className={`icon ${active ? 'active' : ''}`}>
          <div className='hamburguer' />
          <div className='hamburguer' />
          <div className='hamburguer' />
        </div>
      </nav>
      <div className={`area-menu ${active ? 'active' : ''}`}>
        <div className='listamenu'>
          <Link to="/" className="listamenu-item" onClick={closeMenu}>Home</Link>
          <Link to="/sobre" className="listamenu-item" onClick={closeMenu}>Sobre</Link>
          <Link to="/produtos" className="listamenu-item" onClick={closeMenu}>Produtos</Link>  
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
