import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalLGPD = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay-lgpd"
      className="modal-content-lgpd"
      contentLabel="Modal LGPD"
    >
      <div className="modal-lgpd-text">
        <h3>Política de Privacidade</h3>
        <p>
          Este site utiliza cookies para melhorar a experiência do usuário e coletar informações
          durante a navegação. Ao continuar navegando, você concorda com a nossa política de
          privacidade e o uso de cookies.
        </p>
      </div>
      <div className="modal-lgpd-actions">
        <button className="btn btn-primary" onClick={closeModal}>
          Concordo
        </button>
      </div>
    </Modal>
  );
};

export default ModalLGPD;
