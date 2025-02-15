import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { useLocation } from "react-router-dom";

const Main = ({ type, searchResults }) => {
  const location = useLocation();

  // Exibir o Main apenas na rota inicial "/"
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div className="main">
      {/* Se houver pesquisa, exibir os resultados filtrados */}
      {searchResults && searchResults.length > 0 ? (
        <ItemList
          title="Resultados da Pesquisa"
          items={searchResults.length}
          itemsArray={searchResults}
          path="/search"
          idPath="/item"
        />
      ) : (
        <>
          {/* Item List de Artistas */}
          {(type === "artists" || type === undefined) && (
            <ItemList
              title="Artistas Populares"
              items={10}
              itemsArray={artistArray}
              path="/artists"
              idPath="/artist"
            />
          )}

          {/* Item List de Músicas */}
          {(type === "songs" || type === undefined) && (
            <ItemList
              title="Músicas Populares"
              items={20}
              itemsArray={songsArray}
              path="/songs"
              idPath="/song"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
