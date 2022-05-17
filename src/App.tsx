import React, { useState, useEffect } from "react";
import { TechnologyData } from "./shared/types";
import AutoComplete from "./components/AutoComplete";
import FetchData from "./components/FetchData";
import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState<TechnologyData[]>([]);

  useEffect(() => {
    FetchData(setTechnologies);
  }, []);

  return (
    <div className="App">
      {technologies.length > 0 ? (
        <AutoComplete technologies={technologies} />
      ) : (
        <div data-testid="loading">Ładowanie...</div>
      )}
    </div>
  );
}

export default App;
