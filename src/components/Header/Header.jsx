import "./Header.scss";
import { Interactive } from "./Interactive";
import { Logo } from "./Logo";

export const Header = ({ handleToggle, darkTheme }) => {
  return (
    <header className="Header">
      <Logo />
      <Interactive handleToggle={handleToggle} darkTheme={darkTheme} />
    </header>
  );
};
