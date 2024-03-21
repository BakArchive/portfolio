import App from "@/layout/App";
import Error from "@/layout/Error";
import Home from "@/layout/Home";

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
      element: <div>about</div>,
    },
    {
      title: "Resume",
      path: "resume",
      element: <div>resume</div>,
    },
    {
      title: "Portfolio",
      path: "portfolio",
      element: <div>portfolio</div>,
    },
  ],
};

export default RouteRule;
