import "./App.css";
import Nav from "/src/components/Nav.jsx";
import Intro from "/src/components/Intro.jsx";
import Skills from "/src/components/Skills.jsx";
import Projects from "/src/components/Projects.jsx";
import Experience from "/src/components/Experience.jsx";
import Footer from "/src/components/Footer.jsx";
import { Fade } from 'react-awesome-reveal';
import config from '/src/config.js';


function App() {
  const common = "mx-auto w-full px-3 md:px-0 md:w-2/3 pt-0 ";

  return (
    <>
      <header className="pt-8 w-full flex justify-center fixed z-10">
        <Nav data={config.nav} />
      </header>
      <Fade className={common + "lg:w-3/5"}>
        <Intro data={config.intro} />
        <Skills data={config.skills} />
        <Projects data={config.projects} />
        <Experience data={config.experience} />
      </Fade>
      <footer className={common}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
