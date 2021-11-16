import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import "./Header.style.css";


export const Header = () => {
  return (
    <header className="page-header">
      <div className="container header-container">
        <div className="header-logo">
          <NavLink to="/">
            <img
              className="header-logo__img"
              src="../../img/logoMain.svg"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="header-navigation">
          <Navbar />
        </div>
      </div>
    </header>
  );
};
