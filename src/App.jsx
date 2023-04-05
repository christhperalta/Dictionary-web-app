import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  const [themeActive, setThemeActive] = useState(false);

  const handleToggle = () => {
    setThemeActive(!themeActive);
  };

  return (
    <div className={`App ${themeActive ? "darkTheme" : ""}`}>
      <Header handleToggle={handleToggle} themeActive={themeActive} />
      <Main themeActive={themeActive} />
    </div>
  );
}

export default App;

//api
//https://api.dictionaryapi.dev/api/v2/entries/en/Know
