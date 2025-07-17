// App.jsx
import React from "react";
import JuegoCard from "./components/JuegoCard";
import "./App.css";

const juegosTop10 = [
  {
    id: "zelda-oot",
    titulo: "The Legend of Zelda: Ocarina of Time",
    imagen: "img/the-legend-of-zelda-ocarina-of-time.jpg",
    plataforma: "Nintendo 64",
    año: "1998",
    calificacion: "9.9"
  },
  {
    id: "tony-hawk-2",
    titulo: "Tony Hawk's Pro Skater 2",
    imagen: "img/tony-hawks-pro-skater-2.jpg",
    plataforma: "PlayStation",
    año: "2000",
    calificacion: "9.8"
  },
  {
    id: "gta-iv",
    titulo: "Grand Theft Auto IV",
    imagen: "img/grand-theft-auto-iv.jpg",
    plataforma: "PlayStation 3",
    año: "2008",
    calificacion: "9.8"
  },
  {
    id: "witcher-3",
    titulo: "The Witcher 3: Wild Hunt",
    imagen: "img/the-witcher-3.jpg",
    plataforma: "PC / PS4 / Xbox One",
    año: "2015",
    calificacion: "9.8",
    orientacion: "horizontal"
  },
  {
    id: "soulcalibur",
    titulo: "SoulCalibur",
    imagen: "img/soulcalibur.jpg",
    plataforma: "Dreamcast",
    año: "1999",
    calificacion: "9.7",
    orientacion: "vertical"
  },
  {
    id: "galaxy-1",
    titulo: "Super Mario Galaxy",
    imagen: "img/super-mario-galaxy.jpg",
    plataforma: "Wii",
    año: "2007",
    calificacion: "9.7"
  },
  {
    id: "galaxy-2",
    titulo: "Super Mario Galaxy 2",
    imagen: "img/super-mario-galaxy-2.png",
    plataforma: "Wii",
    año: "2010",
    calificacion: "9.7"
  },
  {
    id: "rdr2",
    titulo: "Red Dead Redemption 2",
    imagen: "img/red-dead-redemption-2.jpg",
    plataforma: "PlayStation 4",
    año: "2018",
    calificacion: "9.7"
  },
  {
    id: "gta-v",
    titulo: "Grand Theft Auto V",
    imagen: "img/gta-v.jpg",
    plataforma: "PlayStation 3",
    año: "2013",
    calificacion: "9.7"
  },
  {
    id: "zelda-botw",
    titulo: "The Legend of Zelda: Breath of the Wild",
    imagen: "img/the-legend-of-zelda-breath-of-the-wild.jpg",
    plataforma: "Nintendo Switch",
    año: "2017",
    calificacion: "9.6"
  },
];

function App() {
  return (
    <div className="App">
      <section id="top10">
        <div className="centrado_titulo">
          <h2 className="top10-title">🏆 Top 10</h2>
        </div>

        <div className="top10-grid">
          {juegosTop10.map((juego) => (
            <JuegoCard
              key={juego.id}
              titulo={juego.titulo}
              imagen={juego.imagen}
              plataforma={juego.plataforma.trim()}
              año={juego.año.trim()}
              calificacion={juego.calificacion}
              orientacion={juego.orientacion}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
