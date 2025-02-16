import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const ArtistCont = () => {
  const { id } = useParams();

  // Encontrar artista pelo ID
  const artist = artistArray.find((artist) => artist._id === id);

  // Se o artista não for encontrado, exibir uma mensagem ou redirecionar
  if (!artist) {
    return (
      <div className="artist">
        <h2>Artista não encontrado</h2>
      </div>
    );
  }

  const { name, banner } = artist;

  // Filtrar as músicas do artista
  const songsArrayFromArtist = songsArray.filter(
    (song) => song.artist === name
  );

  // Gerar um ID aleatório apenas se houver músicas
  const randomSong = songsArrayFromArtist.length
    ? songsArrayFromArtist[
        Math.floor(Math.random() * songsArrayFromArtist.length)
      ]
    : null;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        {songsArrayFromArtist.length ? (
          <SongList songsArray={songsArrayFromArtist} />
        ) : (
          <p>Este artista ainda não tem músicas cadastradas.</p>
        )}
      </div>

      {randomSong && (
        <Link to={`/song/${randomSong._id}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      )}
    </div>
  );
};

export default ArtistCont;
