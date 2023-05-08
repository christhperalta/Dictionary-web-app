import { v4 as uuidv4 } from "uuid";
import { Icon } from "../common/Icon";
import { Definitions } from "./Definitions";
import "./Word.scss";

export const Word = ({
  word,
  phonetic,
  url,
  nDefinition,
  vDefinition,
  darkTheme,
}) => {
  return (
    <article className="Word">
      <header className="Word-header">
        <div className="Word-div">
          <h2 className="Word-h2">{word}</h2>
          <h3 className="Word-h3">{phonetic}</h3>
        </div>
        <button className="Word-button">
          <Icon name="play" clase="Word-play" />
        </button>
      </header>
      <div className="Word-noun">
        <p className="Word-p">{nDefinition?.partOfSpeech}</p>
        <hr className={`Word-hr ${darkTheme ? "dark-hr" : ""}`} />
      </div>

      <section className="Word-section">
        <h4 className="Word-h4">Meaning</h4>
        <ul className="Word-ul">
          {nDefinition?.definitions.map(({ definition }) => (
            <Definitions key={uuidv4()} definition={definition} />
          ))}
        </ul>
        <div className="Word-synonyms">
          <h4 className="Word-h4">Synonyms</h4>
          {nDefinition?.synonyms ? (
            <p className="Word-synonyms-p">{nDefinition.synonyms}</p>
          ) : (
            ""
          )}
        </div>
      </section>
      <div className="Word-verb">
        <p className="Word-p">{vDefinition?.partOfSpeech}</p>
        <hr className={`Word-hr ${darkTheme ? "dark-hr" : ""}`} />
      </div>
      <section className="Word-section">
        <h4 className="Word-h4">Meaning</h4>
        <ul className="Word-ul">
          {vDefinition?.definitions.map(({ definition, example }) => (
            <Definitions
              key={uuidv4()}
              definition={definition}
              example={example}
            />
          ))}
        </ul>
      </section>
      <hr className={`Word-hr Word-hr-m ${darkTheme ? "dark-hr" : ""}`} />
      <footer className="Word-footer">
        <h5 className="Word-h5">Source</h5>
        <div className="Word-footer-div">
          <a className="Word-footer-a" href={url} target="_blank">
            {url}
          </a>
          <Icon name="new-Window" clase="Word-new-Window" />
        </div>
      </footer>
    </article>
  );
};
