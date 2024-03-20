import Nav from "@/components/Nav.jsx";
import CopyRight from "@/components/CopyRight.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="pt-8 w-full flex justify-center fixed z-10">
        <Nav />
      </header>
      <main className="min-h-[90vh]">
        <Outlet />
      </main>
      <footer className="py-2">
        <CopyRight />
      </footer>
    </>
  );
}

export default App;
