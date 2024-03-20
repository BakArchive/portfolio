import { useRouteError } from "react-router-dom";

function Error () {
    const error = useRouteError();
    return (
        <div className="h-screen flex justify-center items-center">
            <h1 className="text-5xl">{error.status+" | " || ''}{error.statusText || error.message}</h1>
        </div>
    )
}

export default Error;