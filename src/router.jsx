import App from "@/layout/App";

import { lazy } from "react";

const Home = lazy(() => import("@/layout/Home"));
const About = lazy(() => import("@/layout/About"));
const Resume = lazy(() => import("@/layout/Resume"));
const Portfolio = lazy(() => import("@/layout/Portfolio"));
const ProjectDetail = lazy(() => import("@/layout/ProjectDetail"));

// router configuration
const RouteRule = {
  path: "/",
  element: <App />, // main frame
  errorElement: <App />, // error frame
  children: [
    {
      title: "Home",
      index: true,
      nav: true,
      element: <Home />,
    },
    {
      title: "About",
      path: "about",
      nav: true,
      element: <About />,
    },
    {
      title: "Resume",
      path: "resume",
      nav: true,
      element: <Resume />,
    },
    {
      title: "Portfolio",
      path: "portfolio",
      nav: true,
      element: <Portfolio />,
    },
    {
      title: "Project Detail",
      path: "project/:projectName",
      nav: false,
      element: <ProjectDetail />,
      loader: ({params}) => params.projectName
    },
  ],
};

export default RouteRule;
