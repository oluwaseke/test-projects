import AnchorLink from "react-anchor-link-smooth-scroll";
import Home from "./Home";

function App() {
  return (
    <div>
      <h1 align="center">Welcome</h1>
      <h2 align="center">
        <AnchorLink href="#course">
          <button>Contact me</button>
        </AnchorLink>
        <AnchorLink href="#article">
          <button>About Me</button>
        </AnchorLink>
      </h2>
      <Home />
    </div>
  );
}

export default App;
