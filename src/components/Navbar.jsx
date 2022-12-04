// import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
// import { Button } from "./Button";

export const StyleNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 2px 2px 5px lightgrey;
`;

const Navbar = ({ children }) => {
  return (
    <StyleNavbar>
      <h1>Travel</h1>
      <Link to="/login">
        <Button>Sign In</Button>
      </Link>
    </StyleNavbar>
  );
};

export default Navbar;
