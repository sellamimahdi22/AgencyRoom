import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return <div className="nav">
  <span>
        <Link to="/" className="link" id="logo">
          Chez Soi
        </Link>
      </span>
      <div className="links">
        <Link to="/accueil"className="link">ACCUEIL</Link>
        <Link to="/DECOUVRIR"className="link">DÉCOUVRIR</Link>
        <Link to="/chambres"className="link">CHAMBRES</Link>
        <Link to="/contact"className="link">CONTACT</Link>
        <Link to="/reserver"className="link">RÉSERVER</Link>
        <Link to="/identifier" className="link">
        S'identifier     
           </Link>
        <Link to="/inscrire" className="link">
        S'inscrire
                </Link>
      </div>
  </div>;
};

export default Nav;
