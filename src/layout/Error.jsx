import { useRouteError } from "react-router-dom";
import ThemeSwitch from "@/components/ThemeSwitch.jsx";

function Error() {
  const error = useRouteError();
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-5xl">
        {error.status ? error.status + " | " : ""}
        {error.statusText || error.message}
      </h1>
      <ThemeSwitch className="hidden" />
    </div>
  );
}

export default Error;
