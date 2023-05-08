import { useState } from "react";
import { Icon } from "../common/Icon";
import "./Form.scss";

export const Form = ({ handleGetWord, darkTheme }) => {
  const [input, setInput] = useState("");

  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const value = input.trim();
    if (value.length <= 1) return;
    handleGetWord(value);
    setInput("");
  };

  return (
    <form className={`Form ${darkTheme ? "dark" : ""}`} onSubmit={onFormSubmit}>
      <input
        className="Form-input"
        type="text"
        placeholder="Search for any word..."
        value={input}
        onChange={onInputChange}
      />
      <button className="Form-button">
        <Icon name="search" clase="Form-search" />
      </button>
    </form>
  );
};
