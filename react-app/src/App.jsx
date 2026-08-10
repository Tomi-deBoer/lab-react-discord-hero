import "./App.css";

import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={discordLogo} alt="Discord logo" />
        <img className="menu" src={menuIcon} alt="Menu" />
      </header>

      <main>
        <h1>IMAGINE A PLACE...</h1>

        <p>
          ...where you can belong to a school club, a gaming group,
          or a worldwide art community. Where just you and a handful
          of friends can spend time together. A place that makes it
          easy to talk every day and hang out more often.
        </p>

        <div className="buttons">
          <button>Download for Windows</button>
          <button>Open Discord in your browser</button>
        </div>
      </main>
    </div>
  );
}

export default App;