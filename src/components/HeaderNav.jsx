import React from 'react'
import './HeaderNav.css'
import search from '../assets/icons/search.png'
import arrowLeft from '../assets/icons/small-left.png'
import arrowRight from '../assets/icons/small-right.png'

const HeaderNav = () => {
  return (
    <div className='main-container'>
        <nav className="header__navigation">
                      <div className="navigation">
                          <button className="arrow-left">
                              <img src={arrowLeft} alt="" />
                          </button>
                          <button className="arrow-right">
                              <img src={arrowRight} alt="" />
                          </button>
                      </div>
                      <div className="header__search">
                          <img src={search} alt="" />
                          <input id="search-input" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                              placeholder="O que você quer ouvir?" defaultValue="" />
                      </div>
                      <div className="header__login">
                          <button className="subscribe">Inscreva-se</button>
                          <button className="login">Entrar</button>
                      </div>
                  </nav>
    </div>
  )
}

export default HeaderNav