import "./Main.scss";
import { Icons } from "../Icons/Icons";

export const Main = ({ themeActive }) => {
  return (
    <main className="Main">
      <Form themeActive={themeActive} />
      <WordMening />
    </main>
  );
};

export const Form = ({ themeActive }) => {
  return (
    <form className="Main-form">
      <input
        className={`Main-input ${themeActive ? "isActive" : ""}`}
        type="text"
      />
      <button className="Main-button" type="submit">
        <Icons name="icon-search" width="15.55" height="15.55" />
      </button>
    </form>
  );
};

export const WordMening = () => {
  return (
    <article className="Main-article">
      <header className="Main-header">
        <h2 className="Main-h2">
          keyboard
          <span className="Main-span">/ˈkiːbɔːd/</span>
        </h2>
        <button>
          <Icons
            name="icon-play"
            clase="Main-iconPlay"
            width="48"
            height="48"
          />
        </button>
      </header>
      <section className="Main-section">
        <header className="Main-section-header">
          <h3 className="Main-section-h3">noun</h3>
          <hr className="Main-section-hr" />
        </header>
        <h4 className="Main-section-h4">Meaning</h4>
        <ul className="Main-section-ul">
          <li className="Main-section-li">
            <p className="Main-section-li-p">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </p>
          </li>
          <li className="Main-section-li">
            <p className="Main-section-li-p">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </p>
          </li>
          <li className="Main-section-li">
            <p className="Main-section-li-p">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </p>
          </li>
        </ul>
        <div className="Main-section-div">
          <h4 className="Main-section-h4">Synonyms</h4>
          <p className="Main-section-noun-p">electronic keyboard</p>
        </div>
      </section>
      <section className="Main-section">
        <header className="Main-header">
          <h3 className="Main-section-h3">verb</h3>
          <hr className="Main-section-hr" />
        </header>
        <h4 className="Main-section-h4">Meaning</h4>
        <ul className="Main-section-ul">
          <li className="Main-section-li">
            <p className="Main-section-p">To type on a computer keyboard.</p>
            <span className="Main-section-span">
              “Keyboarding is the part of this job I hate the most.”
            </span>
          </li>
        </ul>
      </section>
      <hr className="Main-hr" />
      <footer className="Main-footer">
        <h5 className="Main-footer-h5">Source</h5>
        <p className="Main-footer-p">
          https://en.wiktionary.org/wiki/keyboard
          <span>
            <Icons name="icon-window" width="12" height="12" />
          </span>
        </p>
      </footer>
    </article>
  );
};
