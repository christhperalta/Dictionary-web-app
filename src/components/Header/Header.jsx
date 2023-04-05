import { useState } from "react";
import "./Header.scss";

export const Header = ({ handleToggle, themeActive }) => {
  return (
    <header className="Header">
      <Logo />
      <div className="Header-container">
        <DropDown themeActive={themeActive} />
        <div className="Header-vertical-line"></div>
        <ToggleSwitch handleToggle={handleToggle} themeActive={themeActive} />
      </div>
    </header>
  );
};

export const Logo = () => {
  return (
    <h1 className="Header-h1">
      <a href="#" className="Header-a">
        <img src="/public/assets/images/logo.svg" alt="logo" />
      </a>
    </h1>
  );
};

export const DropDown = ({ themeActive }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="Header-dropdown">
      <button className="Header-dropdown-button" onClick={handleToggle}>
        Mono
        {themeActive ? (
          <img
            className={`Header-arrow ${isActive ? "isActive" : ""}`}
            src="assets/images/icon-arrow-down-m.svg"
            alt="arrow-down"
          />
        ) : (
          <img
            className={`Header-arrow ${isActive ? "isActive" : ""}`}
            src="assets/images/icon-arrow-down.svg"
            alt="arrow-down"
          />
        )}
      </button>

      <div
        className={`Header-dropdown-div ${
          isActive ? "isActive" : "isInActive"
        } ${themeActive ? "theme" : ""}`}
      >
        <ul>
          <li className="Header-li">
            <button className="Header-dropdown-ul-button">Sans Serif</button>
          </li>
          <li className="Header-li">
            <button className="Header-dropdown-ul-button">Mono</button>
          </li>
          <li className="Header-li">
            <button className="Header-dropdown-ul-button">Serif</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ToggleSwitch = ({ handleToggle, themeActive }) => {
  return (
    <div className="Header-themes">
      <label className="Header-switch">
        <input className="Hader-input" type="radio" onClick={handleToggle} />
        <span
          className={`Header-slider ${themeActive ? "isActive" : ""}`}
        ></span>
      </label>
      {themeActive ? (
        <img
          className="Header-moon"
          src="assets/images/icon-moon-m.svg"
          alt="icon-moon"
        />
      ) : (
        <img
          className="Header-moon"
          src="assets/images/icon-moon.svg"
          alt="icon-moon"
        />
      )}
    </div>
  );
};
