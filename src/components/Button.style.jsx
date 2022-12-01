import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
  border: 1px solid black;
  background: ${(props) => props.backgroundColor};
  font-weight: 600;
`;
