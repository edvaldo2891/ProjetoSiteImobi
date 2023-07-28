import React from 'react';
import img1 from '../../imgs/banner-1.jpg';
import img2 from '../../imgs/banner-2.jpg';
import img3 from '../../imgs/banner-3.jpg';

function Slider() {
  return (
    <div className="container" id="slider-container">
      <div id="slider" className="carousel slide" data-bs-ride="carousel">
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
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Casa 1" />
            <div className="carousel-caption">
              <h5>Casas planejadas</h5>
              <a href="#" className="btn btn-dark">Ver Projeto</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Casa 2" />
            <div className="carousel-caption">
              <h5>Projetos Complexos</h5>
              <a href="#" className="btn btn-dark">Ver Projeto</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Casa 3" />
            <div className="carousel-caption">
              <h5>Projetos Inovadores</h5>
              <a href="#" className="btn btn-dark">Ver Projeto</a>
            </div>
          </div>
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          <i className="bi bi-chevron-compact-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-compact-right"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;