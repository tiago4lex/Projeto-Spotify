import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import SongList from "./SongList";

const ArtistCont = () => {
  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--shade), var(--shade)), url(https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9)",
        }}
      >
        <h2 className="artist__title">Jorge & Mateus</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList />
      </div>

      <Link to="/song/1">
        <FontAwesomeIcon
          className="single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default ArtistCont;
