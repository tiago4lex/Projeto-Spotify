import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBook,
  faPlus,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__navigation">
        <ul>
          <li>
            <Link to="/" aria-label="Início">
              <FontAwesomeIcon className="icon" icon={faHouse} />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="Buscar">
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              <span>Buscar</span>
            </Link>
          </li>
        </ul>
      </nav>

      <section className="library">
        <div className="library__content">
          <button className="library__button">
            <FontAwesomeIcon icon={faBook} />
            <span>Sua Biblioteca</span>
          </button>
          <button className="icon-button">
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </button>
        </div>

        <section className="section-playlist">
          <div className="section-playlist__content">
            <h3 className="title">Crie sua primeira playlist</h3>
            <p className="subtitle">É fácil, vamos te ajudar.</p>
            <button className="section-playlist__button">Criar Playlist</button>
          </div>
        </section>

        <footer className="sidebar__footer">
          <Link className="cookies" to="#" aria-label="Política de Cookies">
            Cookies
          </Link>
          <button className="languages__button">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <span>Português do Brasil</span>
          </button>
        </footer>
      </section>
    </aside>
  );
};

export default Sidebar;
