import Navbar, { StyleNavbar } from "./components/Navbar";
import { StyledButton } from "./components/Button.style";
import { GlobalStyles } from "./components/Global.style";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <StyleNavbar />
    </div>
  );
}

export default App;
