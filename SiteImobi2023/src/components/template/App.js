import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import ModalBanner from './ModalBanner';
import FooterLGPD from './FooterLGPD';



function App() {
  const ativo = true;
  if(ativo){
    return (
      <div>
        <NavBar />
        <ModalBanner />
        <Outlet />
        <FooterLGPD />
        <Footer />
      </div>
    );
  }
  ativo = false;
}

export default App;
