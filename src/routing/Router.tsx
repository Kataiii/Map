import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminPage from "../pages/AdminPage";
import InformationPage from "../pages/InformationPage";
import MainPage from "../pages/MainPage";
import NavigationPage from "../pages/NavigationPage";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <MainPage />,
        },
        {
            path: '/departament/:id',
            element: <InformationPage/>
        },
        {
            path: '/navigation',
            element: <NavigationPage/>
        }
      ]
    },
    {
        path: '/admin',
        element: <AdminPage/>
    }
  ]);

export default Router;