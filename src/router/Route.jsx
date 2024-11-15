import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "../pages/WelcomePages";


const Router = createBrowserRouter([
 
  {
    path: "/",
    element: <WelcomePage />
  }

]);

export default function Route() {
  return <RouterProvider router={Router} />;
}
