import React from "react";
import * as Types from "./Help.types";
import { Ol, Li } from "./Help.style";

const Help = ({ technologies }: Types.Props) => {
  return (
    <div>
      <p style={{ fontWeight: "bold", fontSize: "2rem" }}>POMOC:</p>
      <Ol>
        {technologies.map((item) => (
          <Li>{item.name}</Li>
        ))}
      </Ol>
    </div>
  );
};

export default Help;
