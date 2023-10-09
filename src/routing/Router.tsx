import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminPage from "../pages/AdminPage";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: '/admin',
        element: <AdminPage/>
    }
  ]);

export default Router;