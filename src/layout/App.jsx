import Nav from "@/components/Nav.jsx";
import CopyRight from "@/components/CopyRight.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="pt-8 w-full flex justify-center">
        <Nav />
      </header>
      <main className="pt-10 px-5 w-full md:w-4/5 lg:w-2/3 m-auto flex-1 flex flex-col">
        <Outlet />
      </main>
      <footer className="py-4">
        <CopyRight />
      </footer>
    </>
  );
}

export default App;
