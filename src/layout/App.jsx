import Nav from "@/components/Nav.jsx";
import CopyRight from "@/components/CopyRight.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="py-8 w-full flex justify-center">
        <Nav className="w-full md:w-4/5 lg:w-1/3" />
      </header>
      <main className="px-5 w-full md:w-4/5 m-auto flex flex-col max-w-[1400px]">
        <Outlet />
      </main>
      <footer className="py-4">
        <CopyRight />
      </footer>
    </>
  );
}

export default App;
