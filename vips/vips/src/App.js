import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Produtos from './pages/produtos';
import Sobre from './pages/sobre';
import Navbar from './components/rotas/Navbar';
import Footer from './components/footer/footer.js'
import BurgerMenu from './components/BurgerMenu/BurgerMenu.js';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define o breakpoint do celular para 768px, você pode ajustar conforme necessário
    };

    // Define o estado inicial com base na largura da janela
    setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isMobile ? (
          <BurgerMenu />
        ) : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
