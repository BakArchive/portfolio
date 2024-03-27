import App from "@/layout/App";
import Home from "@/layout/Home";
import About from "@/layout/About";
import Resume from "@/layout/Resume";
import Portfolio from "@/layout/Portfolio";

// router configuration
const RouteRule = {
  path: "/",
  element: <App />, // main frame
  errorElement: <App />, // error frame
  children: [
    {
      title: "Home",
      index: true,
      element: <Home />,
    },
    {
      title: "About",
      path: "about",
      element: <About />,
    },
    {
      title: "Resume",
      path: "resume",
      element: <Resume />,
    },
    {
      title: "Portfolio",
      path: "portfolio",
      element: <Portfolio />,
    },
  ],
};

export default RouteRule;
