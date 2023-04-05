import { useState } from "react";
import { Icons } from "../Icons/Icons";
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
        {/* <img className="Header-img" src="assets/images/logo.svg" alt="logo" />
         */}
        <Icons name="icon-logo" width="28.05" height="32" />
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
        <Icons
          name="icon-arrow"
          clase={`Header-arrowSvg ${isActive ? "isActive" : ""}`}
          color={themeActive ? "#A445ED" : "#838383"}
          width="12"
          height="6"
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
      <Icons
        clase="Header-themes-svg"
        name="icon-moon"
        color={themeActive ? "#A445ED" : "#838383"}
        width="12"
        height="20"
      />
    </div>
  );
};
