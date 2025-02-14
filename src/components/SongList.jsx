import React from "react";
import SongItem from "./SongItem";

const SongList = () => {
  return (
    <div className="song-list">
      <SongItem />
      <p className="song-list__see-more">Ver Mais</p>
    </div>
  );
};

export default SongList;
