import React, { useState } from 'react';
import Modal from 'react-modal';

const FloatingBanner = () => {
  const [showModal, setShowModal] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const fecharBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // Tempo da animação em milissegundos (300ms = 0.3 segundos)
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={fecharBanner}
      overlayClassName="modal-overlay"
      className={`modal-content ${isClosing ? 'closing' : ''}`}
    >
      <div className="banner" style={{ padding: '20px' }}>
        <h3>Olá! Bem-vindo ao nosso site!</h3>
        <p>Estamos em fase de desenvolvimentos, algumas funcionalidades ainda não estão disponíveis.</p>
        <button onClick={fecharBanner}>Fechar</button>
      </div>
    </Modal>
  );
};

export default FloatingBanner;
