import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ATMModule from "../modules/AdminModules/ATMs/ATMModule";
import CountryModule from "../modules/AdminModules/Countries/CountryModule";
import DepartamentModule from "../modules/AdminModules/Departaments/DepartamentModule";
import LocalityModule from "../modules/AdminModules/Localities/LocalityModule";
import StateModule from "../modules/AdminModules/States/StateModule";
import AdminPage from "../pages/AdminPage";
import InformationPage from "../pages/InformationPage";
import MainPage from "../pages/MainPage";
import NavigationPage from "../pages/NavigationPage";

const Router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <App/>,
    //   children: [
    //     {
    //         path: '/',
    //         element: <MainPage />,
    //     },
    //     {
    //         path: '/departament/:id',
    //         element: <InformationPage/>
    //     },
    //     {
    //         path: '/navigation',
    //         element: <NavigationPage/>
    //     }
    //   ]
    // },
    // {
    //     path: '/admin',
    //     element: <AdminPage/>
    // }
    {
      path: '/',
      element: <AdminPage/>,
      children: [
        {
          path: '/',
          element: <CountryModule/>
        },
        {
          path: '/states',
          element: <StateModule/>
        },
        {
          path: '/localities',
          element: <LocalityModule/>
        },
        {
          path: '/offices',
          element: <DepartamentModule/>
        },
        {
          path: '/atms',
          element: <ATMModule/>
        }
      ]
  }
  ]);

export default Router;