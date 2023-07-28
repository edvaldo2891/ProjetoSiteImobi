import React from 'react';
import projetosData from '../data/projetosData'; // Importe a array de projetosData com as informações dos projetos

function Projetos() {
    return (
        <div className="container" id="slider-container">
          <div id="slider" className="carousel slide" data-bs-ride="carousel">
          <div> <h3>Lista de projetos</h3></div>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
                {projetosData.map((projeto, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={projeto.imagem} className="d-block w-100" alt={projeto.titulo} />
                    <div className="carousel-caption">
                        <h5>{projeto.titulo}</h5>
                        <p>{projeto.descricao}</p>
                        <a href="#" className="btn btn-dark">Ver Projeto</a>
                    </div>
                    </div>
                ))}
            </div>
            {/* Botão de controle para voltar ao item anterior */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#slider"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
    
            {/* Botão de controle para avançar para o próximo item */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#slider"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      );
}

export default Projetos;
