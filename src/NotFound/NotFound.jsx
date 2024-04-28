import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError()
    console.error(error.message)
    return (
        <div id="error-page" className="text-center flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl lg:text-9xl font-semibold lg:font-black">404</h1>
            <p className="text-xl lg:text-3xl font-bold">Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-xl md:text-3xl">{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default NotFound;