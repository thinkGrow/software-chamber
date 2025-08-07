import "./App.css";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Services from "./components/Services/Services.tsx";
import SDLC from "./components/SDLC/SDLC.tsx";

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <SDLC></SDLC>
    </>
  );
}

export default App;
