import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


const ModalBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Função para fechar o modal com animação
  const closeModal = () => {
    setIsClosing(true);
    // Aguarda a duração da animação (0.3s) antes de realmente fechar o modal
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    // Ao montar o componente, definimos um tempo de espera para exibir o modal automaticamente (por exemplo, 2 segundos).
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    // Retornamos uma função de limpeza para evitar vazamento de memória.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Não precisamos mais do botão para abrir o modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay" // Classe do CSS para o overlay do modal
        className={`modal-content ${isClosing ? 'closing' : ''}`} // Classe do CSS para o conteúdo do modal + classe 'closing' quando estiver fechando
        contentLabel="Exemplo de Modal"
      >
        <div className="banner">
        <h3>Olá! Bem-vindo ao nosso site!</h3>
        <p>Estamos em fase de desenvolvimentos, algumas funcionalidades ainda não estão disponíveis.</p>
          <button className="btn btn-primary" onClick={closeModal}>
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalBanner;
