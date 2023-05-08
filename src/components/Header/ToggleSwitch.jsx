export const ToggleSwitch = ({ handleToggle, darkTheme }) => {
  return (
    <label className="Header-switch">
      <input className="Header-input" type="checkbox" onClick={handleToggle} />
      <span className={`Header-slider ${darkTheme ? "isActive" : ""}`}></span>
    </label>
  );
};
