import styled from "styled-components";

export const Input = styled.input`
    border: none;
    padding-left: 2px;
    &:focus {
        outline: none;
    }
    height: 42px;
`;

export const ButtonDelete = styled.button`
    display: flex;
    border: none;
    background-color: #e5e5e5;
    cursor: pointer;
    color: black;
    align-items: center;
    font-size: 9px;
`

export const TagsDiv = styled.div`
    display: flex;
    align-items: baseline;
    margin: 10px 0;
    margin-right: 1px;
    margin-left: 4px;
    font-size: 15px;
    padding: 0 10px;
    padding-right: 2px;
    border-radius: 5px;
    background-color: #e5e5e5;
    color: black;
    
`

export const RootDiv = styled.div`
    display: flex;
    border: 2px solid #e6e6e6;    
    color: black;
`

export const ErrorInfo = styled.div`
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: red;
`