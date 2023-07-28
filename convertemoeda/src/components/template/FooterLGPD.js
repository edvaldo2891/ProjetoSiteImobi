import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const FooterLGPD = () => {
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

  // const [isOpen, setIsOpen] = useState(true);

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  return (
  //   <div>
  //     {isOpen && (
  //       <div className="footer-lgpd">
  //         <p>
  //           Este site utiliza cookies para melhorar a experiência do usuário e coletar informações
  //           durante a navegação. Ao continuar navegando, você concorda com a nossa política de
  //           privacidade e o uso de cookies. <a href="#">Política de Privacidade.</a>
  //         </p>
  //         <button className="btn btn-primary" onClick={closeModal}>
  //           Concordo
  //         </button>
  //       </div>
  //     )}
  //  </div>
    <div className="banner">
      {/* Não precisamos mais do botão para abrir o modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay-lgpd" // Classe do CSS para o overlay do modal
        className={`modal-content-lgpd ${isClosing ? 'closing' : ''}`} // Classe do CSS para o conteúdo do modal + classe 'closing' quando estiver fechando
        contentLabel="Exemplo de Modal"
      >
        <div className="footer-lgpd">
            <p>
              Este site utiliza cookies para melhorar a experiência do usuário e coletar informações
              durante a navegação. Ao continuar navegando, você concorda com a nossa política de
              privacidade e o uso de cookies. <a href="#">Política de Privacidade.</a>
            </p>
          <button className="btn btn-primary" onClick={closeModal}>
            Concordo
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FooterLGPD;
