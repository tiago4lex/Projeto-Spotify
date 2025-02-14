import React, { useState } from 'react';
import search from '../assets/icons/search.png';
import arrowLeft from '../assets/icons/small-left.png';
import arrowRight from '../assets/icons/small-right.png';

import songArray from '../assets/database/songs.js';
import artistArray from '../assets/database/artists.js';
import Main from './Main';

const HeaderNav = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setFilteredResults([]);
      return;
    }

    const filteredSongs = songArray.filter(song =>
      song.name.toLowerCase().includes(term)
    );

    const filteredArtists = artistArray.filter(artist =>
      artist.name.toLowerCase().includes(term)
    );

    setFilteredResults([...filteredSongs, ...filteredArtists]);
  };

  return (
    <div className="main-container">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={arrowLeft} alt="Voltar" />
          </button>
          <button className="arrow-right">
            <img src={arrowRight} alt="Avançar" />
          </button>
        </div>
        <div className="header__search">
          <img src={search} alt="Pesquisar" />
          <input
            id="search-input"
            maxLength="800"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>

      {/* Passa os resultados da pesquisa para o componente Main */}
      <Main searchResults={filteredResults} />
    </div>
  );
};

export default HeaderNav;
