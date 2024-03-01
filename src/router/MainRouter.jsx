import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorPage";
import Home from "../screens/Home";

const MainRouter = createBrowserRouter([
    {
        element: (
            <>
                <App />
            </>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default MainRouter