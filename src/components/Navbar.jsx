import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <h1>Logo</h1>
      <GiHamburgerMenu size={"2rem"} />
    </nav>
  );
};

export const StyleNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 2px 2px 5px lightgrey;
`;

export default Navbar;
