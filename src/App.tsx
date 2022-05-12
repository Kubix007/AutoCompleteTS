import React, { useState, useEffect } from "react";
import { TechnologyData } from "./shared/types";
import FetchData from "./components/FetchData";
import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState<TechnologyData[]>([]);

  useEffect(() => {
    FetchData(setTechnologies);
  }, []);

  return (
    <div className="App">
      <ul>
        {technologies.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
