import React from 'react';
import infoBanner from '../../imgs/infobanner.jpg';

function InfoDetails() {
    
  return (
    <div className="container" id="info-container">
      <div className="col-12">
        <h2 className="title primary-color">Detalhes Importantes</h2>
        <p className="subtitle secondary-color">
          Saiba mais sobre a experiência da nossa incrível equipe
        </p>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-5" id="info-banner">
            <img src={infoBanner} alt="Informações" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 bg-secondary-color" id="info-content">
            <div className="row">
              <div className="col-12">
                <h2 className="title">Estes dados fazem a diferença:</h2>
                <p className="subtitle secondary-color">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium tempore fugit et iusto quisquam beatae impedit
                  nobis quas doloribus, atque, ut id similique eligendi, ab
                  soluta magnam maxime cum debitis.
                </p>
              </div>
              <div className="col-12" id="info-numbers">
                <div className="row">
                  <div className="col-4">
                    <h3 className="primary-color">18</h3>
                    <p className="secondary-color">Anos na construção civil</p>
                  </div>
                  <div className="col-4">
                    <h3 className="primary-color">95</h3>
                    <p className="secondary-color">Projetos executados</p>
                  </div>
                  <div className="col-4">
                    <h3 className="primary-color">639</h3>
                    <p className="secondary-color">Clientes</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a className="btn btn-dark">Saber Mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDetails;