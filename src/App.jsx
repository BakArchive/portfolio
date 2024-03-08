import "./App.css";
import Nav from "/src/components/Nav.jsx";
import Intro from "/src/components/Intro.jsx";
import Skills from "/src/components/Skills.jsx";
import Projects from "/src/components/Projects.jsx";
import Experience from "/src/components/Experience.jsx";
import Footer from "/src/components/Footer.jsx";

function App() {
  const common = "mx-auto w-full px-3 md:px-0 md:w-2/3 pt-5 ";

  return (
    <>
      <header className="pt-5 w-full flex justify-center fixed">
        <Nav />
      </header>
      <main className={common + "lg:w-3/5"}>
        <Intro />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <footer className={common}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
