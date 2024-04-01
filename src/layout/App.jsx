import Nav from "@/components/Nav.jsx";
import ThemeSwitch from "@/components/ThemeSwitch.jsx";
import CopyRight from "@/components/CopyRight.jsx";
import ErrUI from "@/components/ErrUI.jsx";
import { useRouteError, Outlet } from "react-router-dom";
import { Suspense, useEffect, useRef } from "react";
import "@/global.css";
import "animate.css"

/**
 * The global App object, sandwich layout (header, main, footer)
 * the main part changes as the active link in nav
 * @returns
 */
function App() {
  const err = useRouteError();
  const titleRef = useRef(null);

  useEffect(() => {
    const handlevisibilityChange = () => {
      if (document.visibilityState === "hidden") document.title = "Look at me, pls"
      else document.title = titleRef.current;
    }
    window.addEventListener("visibilitychange", handlevisibilityChange);

    // remove event listener when unmount
    return () => {
      window.removeEventListener("visibilitychange", handlevisibilityChange);
    }
  },[]); // App is global unique, only call once

  return (
    <>
      <header className="py-8 w-full flex justify-center animate__animated animate__fadeInDown">
        <Nav className="w-full md:w-4/5 lg:w-1/3" titleRef={titleRef} />
      </header>
      <main className="px-5 w-full md:w-4/5 m-auto flex flex-col">
          {err === null && <Suspense><Outlet /></Suspense>}
          {err !== null && (
            <ErrUI err={err.status} className="text-3xl md:text-5xl" />
          )}
      </main>
      <footer className="py-4  animate__animated animate__fadeInUp">
        <CopyRight />
      </footer>
      <ThemeSwitch className="fixed bottom-10 right-10" />
    </>
  );
}

export default App;
