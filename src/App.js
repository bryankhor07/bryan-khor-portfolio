import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
