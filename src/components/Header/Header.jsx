import { useState } from "react";
import { Icon } from "../common/Icon";
import "./Header.scss";

export const Header = ({ handleToggle, darkTheme }) => {
  return (
    <header className="Header">
      <Logo />
      <Interactive handleToggle={handleToggle} darkTheme={darkTheme} />
    </header>
  );
};

export const Logo = () => {
  return (
    <h1 className="Header-h1">
      <a className="Header-a" href="">
        <img className="Header-img" src="assets/images/logo.svg" alt="Logo" />
      </a>
    </h1>
  );
};

export const Interactive = ({ handleToggle, darkTheme }) => {
  return (
    <div className="Header-interactive">
      <DropDown darkTheme={darkTheme} />
      <div className="Header-bar"></div>
      <ToggleSwitch handleToggle={handleToggle} darkTheme={darkTheme} />
      <Icon
        name="moon"
        clase="Header-moon"
        color={darkTheme ? "#A445ED" : "#838383"}
      />
    </div>
  );
};

export const ToggleSwitch = ({ handleToggle, darkTheme }) => {
  return (
    <label className="Header-switch">
      <input className="Header-input" type="checkbox" onClick={handleToggle} />
      <span className={`Header-slider ${darkTheme ? "isActive" : ""}`}></span>
    </label>
  );
};

export const DropDown = ({ darkTheme }) => {
  const [isActive, setIsActive] = useState(false);

  const onClickActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Header-dropDown">
      <button className="Header-button" onClick={onClickActive}>
        <span className="Header-span">Sans Serif</span>
        <Icon
          name="arrow"
          clase="Header-arrow"
          color={darkTheme ? "#A445ED" : "#838383"}
        />
      </button>

      <div
        className={`Header-div ${isActive ? "isActive" : ""}
        ${darkTheme ? "darkTheme shadow " : ""}
      `}
      >
        <ul className="Header-ul">
          <li className="Header-li">
            <button className="Header-li-button">Sans Serif</button>
          </li>

          <li className="Header-li">
            <button className="Header-li-button">Serif</button>
          </li>

          <li className="Header-li">
            <button className="Header-li-button">Mono</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
