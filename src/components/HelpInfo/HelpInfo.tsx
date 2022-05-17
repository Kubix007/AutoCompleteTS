import React from "react";
import * as Types from "./HelpInfo.types";
import "./test.css";

const HelpInfo = ({ technologies }: Types.Props) => {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>POMOC:</p>
      <ol className="list">
        {technologies.map((item) => (
          <li>
            <span>{item.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HelpInfo;
