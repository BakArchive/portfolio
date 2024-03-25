import Nav from "@/components/Nav.jsx";
import ThemeSwitch from "@/components/ThemeSwitch.jsx";
import CopyRight from "@/components/CopyRight.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="py-8 w-full flex justify-center">
        <Nav className="w-full md:w-4/5 lg:w-1/3" />
      </header>
      <main className="px-5 w-full md:w-4/5 m-auto flex flex-col">
        <Outlet />
      </main>
      <footer className="py-4">
        <CopyRight />
      </footer>
      <ThemeSwitch className=" fixed bottom-10 right-10" />
    </>
  );
}

export default App;
