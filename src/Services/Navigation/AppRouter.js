import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/about",
        element: <App/>,
    },
    {
        path: "/contact",
        element: <App/>,
    }
  ]);