import React, { useState, useEffect } from "react";
import { TechnologyData } from "./shared/types";
import AutoComplete from "./components/AutoComplete";
import HelpInfo from "./components/HelpInfo";
import FetchData from "./components/FetchData";
import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState<TechnologyData[]>([]);

  useEffect(() => {
    FetchData(setTechnologies);
  }, []);

  return (
    <div className="App">
      <div className="side">
        <HelpInfo technologies={technologies} />
      </div>
      {technologies.length > 0 ? (
        <AutoComplete technologies={technologies} />
      ) : (
        <div data-testid="loading">Ładowanie...</div>
      )}
      <div className="side">bc</div>
    </div>
  );
}

export default App;
