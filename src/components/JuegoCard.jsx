// components/JuegoCard.jsx
import React from "react";
import PropTypes from "prop-types";
import "../App.css"; // Asegúrate de que los estilos estén disponibles

function JuegoCard({ titulo, imagen, plataforma, año, calificacion, orientacion = "horizontal" }) {
  return (
    <div className="juego-card">
      <img
        src={imagen}
        alt={titulo}
        className={`juego-img ${orientacion === "vertical" ? "vertical-img" : ""}`}
      />
      <h3>{titulo}</h3>
      <p><strong>Plataforma:</strong> {plataforma}</p>
      <p><strong>Año:</strong> {año}</p>
      <p><strong>Calificación:</strong> {calificacion}</p>
    </div>
  );
}

// Validación de props
JuegoCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  plataforma: PropTypes.string.isRequired,
  año: PropTypes.string.isRequired,
  calificacion: PropTypes.string.isRequired,
  orientacion: PropTypes.oneOf(["horizontal", "vertical"])
};

export default JuegoCard;
