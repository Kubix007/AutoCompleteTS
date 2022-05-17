import styled from "styled-components";

export const Ol = styled.ol`
    list-style-type: none;
    counter-reset: li;
`;

export const Li = styled.li`
    font-size: 2rem;

    &:before {
        counter-increment: li;
        content: counter(li, decimal-leading-zero);
          color: red;
          margin-right: 0.25em;
      }
`;
