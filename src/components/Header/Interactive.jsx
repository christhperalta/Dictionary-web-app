import { Icon } from "../common/Icon";
import { DropDown } from "./DropDown";
import { ToggleSwitch } from "./ToggleSwitch";

export const Interactive = ({ handleToggle, darkTheme }) => {
  return (
    <div className="Header-interactive">
      <DropDown darkTheme={darkTheme} />
      <div className={`Header-bar ${darkTheme ? "dark-hr" : ""}`}></div>
      <ToggleSwitch handleToggle={handleToggle} darkTheme={darkTheme} />
      <Icon
        name="moon"
        clase="Header-moon"
        color={darkTheme ? "#A445ED" : "#838383"}
      />
    </div>
  );
};
