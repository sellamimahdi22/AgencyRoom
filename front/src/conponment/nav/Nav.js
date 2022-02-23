import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
// plan B module, forces a component update
import useForceUpdate from "use-force-update";
//
const Nav = () => {
  const { users } = useSelector((state) => state.userReducer);
  function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    forceUpdate();
  }, [users]);

  return (
    <div>

    <div className="nav">
      <span>
        <Link to="/" className="link" id="logo">
          Chez Soi
        </Link>
      </span>
      <div className="links">
        <Link to="/" className="linke">
          ACCUEIL
        </Link>
        <Link to="/DECOUVRIR" className="linke">
          DÉCOUVRIR
        </Link>
        <Link to="/chambres" className="linke">
          CHAMBRES
        </Link>
          
        <Link to="/contact" className="linke">
          CONTACT
        </Link>
        <Link to="/reserver" className="linke">
          RÉSERVER
        </Link>
            </div>
       
    {localStorage.getItem("currentUser") ? (
          <div class="dropdown">
            <button class="dropbtn">
              {" "}
              <BsFillPersonFill />
              <i class="fa fa-user" aria-hidden="true"></i>{" "}
              {JSON.parse(localStorage.getItem("currentUser")).firstname}
            </button>
            <div class="dropdown-content">
              <Link to="/Profile">Profil</Link>
              <a href="/accueil" onClick={logout}>
                Déconnexion
              </a>
            </div>
          </div>
        ) : (
          <Link to="/SeConnecter" className="link1">
           CONNEXION
          </Link>
        )} 
    </div>
        </div>
  );
};

export default Nav;
