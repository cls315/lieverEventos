import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  return (
    <div className="container">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.verdissimo.com/wp-content/uploads/2018/05/todo-sobre-la-decoracion-de-eventos-verdissimo.jpg" // Reemplaza con la URL de tu primera imagen
              className="d-block w-100"
              alt="Imagen carousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.wixstatic.com/media/35fea8_b1533cc3676f48539e395b32ab873971~mv2.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_auto/35fea8_b1533cc3676f48539e395b32ab873971~mv2.jpg" // Reemplaza con la URL de tu segunda imagen
              className="d-block w-100"
              alt="Imagen carousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0OyQGypFoUASqHLinfsCNn7UTDFfqSaY1H9USS8BxH2uG6UaCdAI6r8702tS3Z97UR0&usqp=CAU" // Reemplaza con la URL de tu tercera imagen
              className="d-block w-100"
              alt="Imagen carousel"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
