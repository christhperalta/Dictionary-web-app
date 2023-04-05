import "./Main.scss";

export const Main = ({ themeActive }) => {
  return (
    <main className="Main">
      <Form themeActive={themeActive} />
      <WordMening themeActive={themeActive} />
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
        <img src="assets/images/icon-search.svg" alt="icon-search" />
      </button>
    </form>
  );
};

export const WordMening = ({ themeActive }) => {
  return (
    <article className="Main-article">
      <header className="Main-header">
        <h2 className="Main-h2">
          keyboard
          <span className="Main-span">/ˈkiːbɔːd/</span>
        </h2>
        <button className="Main-button-play">
          <img src="assets/images/icon-play.svg" alt="" />
        </button>
      </header>
      <section className="Main-section">
        <header className="Main-section-header">
          <h3 className="Main-section-h3">noun</h3>
          <hr className={`Main-section-hr ${themeActive ? "hr-theme" : ""}`} />
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
          <hr className={`Main-section-hr ${themeActive ? "hr-theme" : ""}`} />
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
      <hr className={`Main-hr ${themeActive ? "hr-theme" : ""}`} />
      <footer className="Main-footer">
        <h5 className="Main-footer-h5">Source</h5>
        <p className="Main-footer-p">
          https://en.wiktionary.org/wiki/keyboard
          <img
            className="Main-iconWindow"
            src="assets/images/icon-new-window.svg"
            alt="icon-new-window"
          />
        </p>
      </footer>
    </article>
  );
};
