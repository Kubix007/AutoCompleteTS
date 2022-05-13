import { Dispatch, SetStateAction } from "react";
import { TechnologyData } from "../../shared/types";

export interface Props {
    tags: string[];
    suggestionsList: Array<TechnologyData>; 
    setSuggestionsList: Dispatch<SetStateAction<TechnologyData[]>>; 
    setTags: Dispatch<SetStateAction<string[]>>; 
    setInputValue: Dispatch<SetStateAction<string>>; 
    setInputError: Dispatch<SetStateAction<string>>; 
    setSelectedIndex: Dispatch<SetStateAction<number>>; 
    selectedIndex: number;
}