import React, { useState } from 'react';
import logo from '../../imgs/imovi-icon.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para fechar o menu após clicar em uma opção
  const fecharMenu = () => {
    setMenuAberto(false);
  };

  // Função para alternar o estado do menu (aberto/fechado)
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
      <div className="container py-3">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="iMovi" />
          <span>iMovi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className={`collapse navbar-collapse ${menuAberto ? 'show' : ''}`} id="navbar-items">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={fecharMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projetos" className="nav-link" onClick={fecharMenu}>
                Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/imoveis" className="nav-link" onClick={fecharMenu}>
                Imóveis
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link" onClick={fecharMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
