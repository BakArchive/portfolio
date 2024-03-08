import "./App.css";
import Anchor from "/src/components/Anchor.jsx";
import Nav from "/src/components/Nav.jsx";
import Intro from "/src/components/Intro.jsx";
import Skills from "/src/components/Skills.jsx";
import Projects from "/src/components/Projects.jsx";
import Experience from "/src/components/Experience.jsx";
import Footer from "/src/components/Footer.jsx";

function App() {
  const common = "mx-auto w-full px-3 md:px-0 md:w-2/3 pt-0 ";

  return (
    <>
      <header className="pt-5 w-full flex justify-center fixed z-10">
        <Nav />
      </header>
      <main className={common + "lg:w-3/5"}>
        <Anchor id="Intro" />
        <Intro />
        <Anchor id="Skills" />
        <Skills />
        <Anchor id="Projects" />
        <Projects />
        <Anchor id="Experience" />
        <Experience />
      </main>
      <footer className={common}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
