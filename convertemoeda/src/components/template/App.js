import React from 'react';
import { Outlet } from 'react-router-dom';

// Componentes internos
import Footer from './Footer';
import NavBar from './NavBar';
import ModalBanner from './ModalBanner';
import FooterLGPD from './FooterLGPD';
// import ModalLGPD from './ModalLGPD';


function App() {
  const ativo = true;
  if(ativo){
    return (
      <div>
        {console.log('Entrou no site')}
        <NavBar />
        <ModalBanner />
        <Outlet />
        <FooterLGPD />
        <Footer />
        {/* <ModalLGPD /> */}
      </div>
    );
  }
  ativo = false;
}

export default App;
