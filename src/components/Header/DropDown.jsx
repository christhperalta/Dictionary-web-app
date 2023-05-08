import { useEffect } from "react";
import { useState } from "react";
import { Icon } from "../common/Icon";

const body = document.querySelector("body");

export const DropDown = ({ darkTheme }) => {
  const [isActive, setIsActive] = useState(false);
  const [fonts, setFonts] = useState("Sans Serif");

  const onClickActive = () => {
    setIsActive(!isActive);
  };

  const onClickFonts = (fonts) => {
    setFonts(fonts);
  };

  useEffect(() => {
    if (fonts === "Sans Serif") {
      (body.classList.contains("Serif") && body.classList.remove("Serif")) ||
        (body.classList.contains("Mono") && body.classList.remove("Mono"));

      body.classList.add("Sans-Serif");
    } else if (fonts === "Serif") {
      (body.classList.contains("Sans-Serif") &&
        body.classList.remove("Sans-Serif")) ||
        (body.classList.contains("Mono") && body.classList.remove("Mono"));

      document.querySelector("body").classList.add("Serif");
    } else {
      (body.classList.contains("Sans-Serif") &&
        body.classList.remove("Sans-Serif")) ||
        (body.classList.contains("Serif") && body.classList.remove("Serif"));
      document.querySelector("body").classList.add("Mono");
    }
  }, [fonts]);

  return (
    <div className="Header-dropDown">
      <button className="Header-button" onClick={onClickActive}>
        <span className="Header-span">{fonts}</span>
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
            <button
              className="Header-li-button"
              onClick={() => onClickFonts("Sans Serif")}
            >
              Sans Serif
            </button>
          </li>

          <li className="Header-li">
            <button
              className="Header-li-button"
              onClick={() => onClickFonts("Serif")}
            >
              Serif
            </button>
          </li>

          <li className="Header-li">
            <button
              className="Header-li-button"
              onClick={() => onClickFonts("Mono")}
            >
              Mono
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
