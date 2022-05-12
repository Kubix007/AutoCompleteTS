import React, { useState } from "react";
import * as Types from "./AutoComplete.types";
import { TechnologyData, Tags } from "../../shared/types";
import {
  Input,
  TagsDiv,
  RootDiv,
  ButtonDelete,
  ErrorInfo,
} from "./AutoComplete.style";

const AutoComplete = ({ technologies }: Types.Props) => {
  const [inputValue, setInputValue] = useState<string>();
  const [inputError, setInputError] = useState<string>();
  const [suggestionsList, setSuggestionsList] =
    useState<TechnologyData>(technologies);
  const [filtredSuggestionsList, setFiltredSuggestionsList] = useState<
    TechnologyData[]
  >([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (i: number) => {
    setTags((prevState) => prevState.filter((tag, index) => index !== i));
  };

  return (
    <div>
      <RootDiv>
        {tags.map((tag, index) => (
          <TagsDiv key={index}>
            {tag}
            <ButtonDelete onClick={() => handleClick(index)}>X</ButtonDelete>
          </TagsDiv>
        ))}
      </RootDiv>
    </div>
  );
};

export default AutoComplete;
