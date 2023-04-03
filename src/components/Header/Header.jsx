import "./Header.scss";

export const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <div className="Header-container">
        <DropDown />
        <div className="Header-bar"></div>
        <ToggleSwitch />
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

export const DropDown = () => {
  return (
    <div className="Header-dropdown">
      <button className="Header-dropdown-button">
        Mono
        <img
          src="/public/assets/images/icon-arrow-down.svg"
          alt="icon-arrow-down"
        />
      </button>

      <div className="Header-dropdown-div">
        <ul className="Header-dropdown-ul">
          <buttton className="Header-dropdown-ul-button">Sans Serif</buttton>
          <buttton className="Header-dropdown-ul-button">Mono</buttton>
          <buttton className="Header-dropdown-ul-button">Serif</buttton>
        </ul>
      </div>
    </div>
  );
};

export const ToggleSwitch = () => {
  return (
    <label className="Header-switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};
