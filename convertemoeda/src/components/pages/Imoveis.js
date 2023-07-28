import React from 'react';
import banner1 from '../../imgs/project-1.jpg';
import banner2 from '../../imgs/project-2.jpg';
import banner3 from '../../imgs/project-3.jpg';
import banner4 from '../../imgs/project-4.jpg';
import banner5 from '../../imgs/project-5.jpg';
import banner6 from '../../imgs/project-6.jpg';


function Imoveis() {
    return (
        <div className="container" id="featured-container">
             <div className="container" id="paginas"><h3>Lista de imóveis</h3></div>
          <div className="col-12">
              <h2 className="title primary-color">Trabalhos em Destaque</h2>
              <p className="subtitle secondary-color">
                Conheça nossos projetos mais desafiadores
              </p>
            </div>
            <div className="col-12" id="featured-images">
              <div className="row g-4">
                <div className="col-12 col-md-4">
                  <img src={banner1} alt="Projeto 1" className="img-fluid" />
                  <div className="banner-content">
                    <p className="secondary-color">Categoria</p>
                    <h3>Nome do Projeto</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <img src={banner2} alt="Projeto 2" className="img-fluid" />
                  <div className="banner-content">
                    <p className="secondary-color">Categoria</p>
                    <h3>Nome do Projeto</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <img src={banner3} alt="Projeto 3" className="img-fluid" />
                  <div className="banner-content">
                    <p className="secondary-color">Categoria</p>
                    <h3>Nome do Projeto</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <img src={banner4} alt="Projeto 4" className="img-fluid" />
                  <div className="banner-content">
                    <p className="secondary-color">Categoria</p>
                    <h3>Nome do Projeto</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <img src={banner5} alt="Projeto 5" className="img-fluid" />
                  <div className="banner-content">
                    <p className="secondary-color">Categoria</p>
                    <h3>Nome do Projeto</h3>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <img src={banner6} alt="Projeto 6" className="img-fluid" />
                  <div className="banner-content">
                    <p className="secondary-color">Categoria</p>
                    <h3>Nome do Projeto</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
}

export default Imoveis;
