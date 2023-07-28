import React from 'react';

function MiniBanners() { // Corrigir o nome da função para MiniBanners
  return (
    <div className="container" id="featured-container">
      <div className="col-12 col-md-10 offset-md-1" id="mini-banners">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-box primary-color"></i>
              <div className="card-body">
                <h5 className="card-title primary-color">Projetos completos</h5>
                <p className="card-text secondary-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="btn btn-dark">Saber Mais</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-layers primary-color"></i>
              <div className="card-body">
                <h5 className="card-title primary-color">Você participa também</h5>
                <p className="card-text secondary-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="btn btn-dark">Saber Mais</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-lightning"></i> {/* Corrigir o nome da classe para bi-lightning */}
              <div className="card-body primary-color">
                <h5 className="card-title primary-color">
                  Adiantamento de entregas
                </h5>
                <p className="card-text secondary-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="btn btn-dark">Saber Mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBanners; // Corrigir o nome da exportação para MiniBanners
