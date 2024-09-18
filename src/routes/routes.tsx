import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routesGenerator from "../utils/routesGenerator";
import { paths } from "./path.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: routesGenerator(paths),
  },
]);

export default router;
