import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { Button } from "./Button";

export const StyleNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 3rem 1.5rem 1.5rem;
  border-bottom: 1px solid black;
  h1 {
    font-size: 1rem;
  }
`;

const Navbar = ({ children }) => {
  return (
    <StyleNavbar>
      <h1>Travel Blog</h1>
      <Button>Sign In</Button>{" "}
    </StyleNavbar>
  );
};

export default Navbar;
