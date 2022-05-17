import { useState, useEffect } from "react";
import { TechnologyData } from "./shared/types";
import AutoComplete from "./components/AutoComplete";
import Info from "./components/Info";
import Help from "./components/Help";
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
        <Help technologies={technologies} />
      </div>
      {technologies.length > 0 ? (
        <AutoComplete technologies={technologies} />
      ) : (
        <div data-testid="loading">Ładowanie...</div>
      )}
      <div className="container">
        <Info />
      </div>
    </div>
  );
}

export default App;
