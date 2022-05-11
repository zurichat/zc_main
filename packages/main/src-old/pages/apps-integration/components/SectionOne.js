import { useState } from "react";
import Circle from "../assets/circle.svg";
import CircleDot from "../assets/circleDot.svg";
import SectionOneStyles from "../styles/SectionOne.module.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className={SectionOneStyles.app}>
      <div className={SectionOneStyles.offer}>
        <h1>Collaborate faster on zuri with third-party apps</h1>
        <p>
          <span>INTEGRATE</span> | <span>SET UP</span> |{" "}
          <span>COLLABORATE</span>
        </p>
        <button>Get Essentials Apps</button>
      </div>
      <div>
        <img
          draggable={false}
          src={CircleDot}
          className={SectionOneStyles.circleDot}
        />
        <img
          draggable={false}
          src={Circle}
          className={SectionOneStyles.circleLine}
        />
      </div>
      <div>
        <input
          name="search"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          placeholder="What app are you looking for?"
          className={SectionOneStyles.searchBox}
        />
      </div>
    </div>
  );
}

export default App;
