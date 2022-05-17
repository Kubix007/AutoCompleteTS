import React from "react";
import * as Types from "./SuggestionList.types";
import { StyledUl, StyledLi } from "./SuggestionList.style";

const SuggestionList = ({
  tags,
  suggestionsList,
  setSuggestionsList,
  setTags,
  setInputValue,
  setInputError,
  setSelectedIndex,
  selectedIndex,
}: Types.Props) => {
  const handleClick = (value: string) => {
    if (tags.find((tag) => tag.toLowerCase() === value.toLowerCase())) {
      setInputError("Podany tag już istnieje :(");
      setInputValue("");
      setSuggestionsList([]);
    } else {
      setTags((prevState) => [...prevState, value]);
      setInputValue("");
      setSuggestionsList([]);
      setSelectedIndex(0);
    }
  };

  const onMouseOver = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    document
      .getElementById(target.id)!
      .setAttribute("backgroundColor", "#e5e5e5");
    setSelectedIndex(parseInt(target.id));
  };

  const onMouseOut = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    setSelectedIndex(0);
    document
      .getElementById(target.id)!
      .setAttribute("backgroundColor", "white");
  };

  return (
    <div>
      <StyledUl data-testid="ulTest">
        {suggestionsList.map((suggestion, index) => {
          let className;
          if (index === selectedIndex) {
            className = "selected";
          }
          return (
            <StyledLi
              id={index.toString()}
              className={className}
              key={suggestion.id}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              onClick={() => handleClick(suggestion.name)}
            >
              {suggestion.name}
            </StyledLi>
          );
        })}
      </StyledUl>
    </div>
  );
};

export default SuggestionList;
