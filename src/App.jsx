import { useEffect, useState } from "react";
import { Form, Header, Word } from "./components";
import { fetchWords } from "./helper/fetWords";
import "./App.scss";
const body = document.querySelector("body");

const App = () => {
  const [newWord, setNewWord] = useState("keyboard");
  const [meanings, setMeanings] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  const handleGetWord = (word) => {
    setNewWord(word);
  };

  const dictionaryApi = async () => {
    const data = await fetchWords(newWord);
    setMeanings(data);
  };

  useEffect(() => {
    if (darkTheme) {
      body.classList.add("darkTheme");
    } else {
      body.classList.remove("darkTheme");
    }
  }, [darkTheme]);

  useEffect(() => {
    if (newWord === "") return;

    dictionaryApi();
  }, [newWord]);

  return (
    <div className="App">
      <Header handleToggle={handleToggle} darkTheme={darkTheme} />
      <div className="Main">
        <Form handleGetWord={handleGetWord} darkTheme={darkTheme} />
        {meanings && <Word {...meanings} darkTheme={darkTheme} />}
      </div>
    </div>
  );
};

export default App;
