import { useEffect, useState } from "react";
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
  const [font, setFont] = useState("serif");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleFontsTypes = (type) => {
    setFont(type);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (font === "sansSerif") {
      body.classList.remove("inconsolata") || body.classList.remove("serif");
      body.classList.add("sansSerif");
    }
    if (font === "serif") {
      body.classList.remove("inconsolata") ||
        body.classList.remove("sansSerif");
      body.classList.add("serif");
    }

    if (font === "inconsolata") {
      body.classList.remove("sansSerif") || body.classList.remove("serif");
      body.classList.add("inconsolata");
    }
  }, [font]);

  return (
    <div className="Header-dropdown">
      <button className="Header-dropdown-button" onClick={handleToggle}>
        {font === "sansSerif" && "Sant Serif"}
        {font === "serif" && "Serif"}
        {font === "inconsolata" && "Mono"}
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
            <button
              className="Header-dropdown-ul-button sansSerif"
              onClick={() => handleFontsTypes("sansSerif")}
            >
              Sans Serif
            </button>
          </li>
          <li className="Header-li">
            <button
              className="Header-dropdown-ul-button serif"
              onClick={() => handleFontsTypes("serif")}
            >
              Serif
            </button>
          </li>
          <li className="Header-li">
            <button
              className="Header-dropdown-ul-button incorsolata"
              onClick={() => handleFontsTypes("inconsolata")}
            >
              Mono
            </button>
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
