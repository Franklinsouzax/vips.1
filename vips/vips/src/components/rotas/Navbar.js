import React from 'react';
import '../rotas/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img className='logo' src={logo} alt='logo'/>
        <Link to="/" className="nav-link" id="home-link">Home</Link>
        <Link to="/sobre" className="nav-link" id="sobre-link">Sobre</Link>
        <Link to="/produtos" className="nav-link" id="produtos-link">Produtos</Link>     
    </nav>
  );
};

export default Navbar;


