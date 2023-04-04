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
        <img className="Header-img" src="assets/images/logo.svg" alt="logo" />
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
        <Icon
          name="icon-arrow"
          clase={`Header-arrowSvg ${isActive ? "isActive" : ""}`}
          color={themeActive ? "#A445ED" : "#838383"}
        />
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
      <Icon
        clase="Header-themes-svg"
        name="icon-moon"
        color={themeActive ? "#A445ED" : "#838383"}
      />
    </div>
  );
};

export const Icon = ({ name, color = "", clase = "" }) => {
  return (
    <>
      {name === "icon-moon" && (
        <svg
          className={clase}
          xmlns="http://www.w3.org/2000/svg"
          width="19.99"
          height="20"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      )}

      {name === "icon-arrow" && (
        <svg
          className={clase}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path fill="none" stroke={color} strokeWidth="1.5" d="m1 1 6 6 6-6" />
        </svg>
      )}
    </>
  );
};
