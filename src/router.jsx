import App from "@/layout/App";
import Error from "@/layout/Error";
import Home from "@/layout/Home";
import About from "@/layout/About";
import Resume from "@/layout/Resume";
import Portfolio from "@/layout/Portfolio";

const RouteRule = {
  path: "/",
  element: <App />,
  errorElement: <Error />,
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
