import App from "@/layout/App";

import { lazy } from "react";

const Home = lazy(() => import('@/layout/Home'))
const About = lazy(() => import("@/layout/About"));
const Resume = lazy(() => import("@/layout/Resume"));
const Portfolio = lazy(() => import("@/layout/Portfolio"));

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
