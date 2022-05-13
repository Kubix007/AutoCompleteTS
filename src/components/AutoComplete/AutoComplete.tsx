import React, { useState } from "react";
import * as Types from "./AutoComplete.types";
import { TechnologyData } from "../../shared/types";
import SuggestionList from "../SuggestionList";
import {
  Input,
  TagsDiv,
  RootDiv,
  ButtonDelete,
  ErrorInfo,
} from "./AutoComplete.style";

const AutoComplete = ({ technologies }: Types.Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [suggestionsList] = useState<Array<TechnologyData>>(technologies);
  const [filtredSuggestionsList, setFiltredSuggestionsList] = useState<
    Array<TechnologyData>
  >([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    if (key === "Enter") {
      if (inputValue && filtredSuggestionsList.length > 0) {
        if (
          tags.find(
            (tag) =>
              tag.toLowerCase() ===
              filtredSuggestionsList[selectedIndex].name.toLowerCase()
          )
        ) {
          setInputError("Podany tag już istnieje :(");
          setInputValue("");
          setFiltredSuggestionsList([]);
        } else {
          setTags((prevState) => [
            ...prevState,
            filtredSuggestionsList[selectedIndex].name,
          ]);
          setInputValue("");
          setFiltredSuggestionsList([]);
        }
      } else {
        if (
          tags.find((tag) => tag.toLowerCase() === inputValue.toLowerCase())
        ) {
          setInputError("Podany tag już istnieje :(");
          setInputValue("");
          setFiltredSuggestionsList([]);
        } else {
          setTags((prevState) => [...prevState, inputValue]);
          setInputValue("");
          setFiltredSuggestionsList([]);
        }
      }
    } else if (key === "Backspace" && !inputValue && tags) {
      e.preventDefault();
      const currentTags = [...tags];
      const tagToRemove = currentTags.pop();
      setTags(currentTags);
      setInputValue(tagToRemove!);
    } else if (key === "ArrowUp") {
      if (selectedIndex === 0) {
        return;
      }
      setSelectedIndex(selectedIndex - 1);
    } else if (key === "ArrowDown") {
      if (selectedIndex === filtredSuggestionsList.length - 1) {
        return;
      }
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleClick = (i: number) => {
    setTags((prevState) => prevState.filter((tag, index) => index !== i));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIndex(0);
    const { value } = e.target;
    const regex = new RegExp(`^${value}`, "gi");
    let filtredSuggestions: Array<TechnologyData> = [];
    if (value.length > 0) {
      filtredSuggestions = suggestionsList.filter((x) => {
        return x.name.match(regex);
      });
    }
    setInputValue(value);
    setFiltredSuggestionsList(filtredSuggestions);
    setInputError("");
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
        <Input
          data-testid="resolved"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </RootDiv>
      {filtredSuggestionsList && filtredSuggestionsList.length ? (
        <SuggestionList
          tags={tags}
          suggestionsList={filtredSuggestionsList}
          setSuggestionsList={setFiltredSuggestionsList}
          setTags={setTags}
          setInputValue={setInputValue}
          setInputError={setInputError}
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />
      ) : null}
      <ErrorInfo>{inputError}</ErrorInfo>
    </div>
  );
};

export default AutoComplete;
