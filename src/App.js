import { Button } from "./components/Button";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/Global.style";
import PostCard from "./components/PostCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default App;
