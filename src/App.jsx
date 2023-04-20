import { useEffect, useState } from "react";
import "./App.scss";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Word } from "./components/Word/Word";

const body = document.querySelector("body");

const fetchWords = async (words) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`
  );
  const data = await response.json();
  const meanings = data.map((item) => {
    return {
      word: item.word,
      phonetic: item.phonetic,
      nDefinition: item.meanings[0],
      vDefinition: item.meanings[1],
      url: item.sourceUrls[0],
    };
  });
  return meanings[0];
};

const App = () => {
  const [newWord, setNewWord] = useState("");
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
        <Form handleGetWord={handleGetWord} />
        {meanings ? <Word {...meanings} /> : null}
      </div>
    </div>
  );
};

export default App;
