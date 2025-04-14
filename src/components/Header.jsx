import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Group 9.png";
import avatar from "../assets/avatar.png";
import "../css/Header.css";

const Header = ({ user, onLoginClick, onLogout }) => {
  const navigate = useNavigate();

  const handleRecipeBoxClick = () => {
    navigate("/recipe-box");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="Chefify Logo" />
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder={user ? "Salad ?" : "What would you like to cook ?"}
            className="search-input"
          />
        </div>

        {/* Main Navigation */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <Link to="/whattocook">What to cook</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/ingredients">Ingredients</Link>
            </li>
            <li>
              <Link to="/occasions">Occasions</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>

        {/* Authentication Area */}
        <div className="auth-area">
          {user ? (
            <>
              <button className="recipe-box-btn" onClick={handleRecipeBoxClick}>
                Your Recipe Box
              </button>
              <div className="user-avatar">
                <img src={avatar} alt="User" onClick={onLogout} />
              </div>
            </>
          ) : (
            <>
              <button className="login-btn" onClick={onLoginClick}>
                Login
              </button>
              <button className="subscribe-btn" onClick={onLoginClick}>
                Subscribe
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
