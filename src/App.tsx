import "./App.css";
import Hero from "./components/hero/Hero.tsx";
import About from "./components/about/About.tsx";
import Services from "./components/services/Services.tsx";
import SDLC from "./components/sdlc/SDLC.tsx";
import Why from "./components/why/Why.tsx";
import Stack from "./components/stack/Stack.tsx";
import Uncover from "./components/uncover/Uncover.tsx";
import Industry from "./components/industry/Industry.tsx";

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <SDLC></SDLC>
      <Why></Why>
      <Stack></Stack>
      <Uncover></Uncover>
      <Industry></Industry>
    </>
  );
}

export default App;
