import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid black;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
`;

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
