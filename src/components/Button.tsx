import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;
  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`;

interface Props {
  children: string;
  onClick: () => void;
  cancel?: boolean;
}

export const Button: React.FC<Props> = ({ children, onClick, cancel }) => {
  return (
    <StyledButton onClick={onClick} className={cancel ? "cancel" : ""}>
      {children}
    </StyledButton>
  );
};
