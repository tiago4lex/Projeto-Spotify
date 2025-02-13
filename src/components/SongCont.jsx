import React from "react";
import "./SongCont.css";
import Player from "./Player";

const SongCont = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem da Música X"
          />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <img
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt="Imagem do Artista X"
          />
        </div>
        <Player />
        <div>
            <p>Última Saudade - Ao Vivo</p>
            <p>Henrique & Juliano</p>   
        </div>
      </div>
    </div>
  );
};

export default SongCont;
