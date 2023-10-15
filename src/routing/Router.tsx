import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ATMModule from "../modules/AdminModules/ATMs/ATMModule";
import ConectModule from "../modules/AdminModules/ConectModule";
import CountryModule from "../modules/AdminModules/Countries/CountryModule";
import DepartamentModule from "../modules/AdminModules/Departaments/DepartamentModule";
import LocalityModule from "../modules/AdminModules/Localities/LocalityModule";
import StateModule from "../modules/AdminModules/States/StateModule";
import StaticModule from "../modules/AdminModules/StatisticModule";
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
      element: <MainPage/>,
      children: [
        {
          path: '/',
          element: <AdminPage/>,
          children: [
            {
              path: '/',
              element: <CountryModule/>
            },
            {
              path: '/admin/states',
              element: <StateModule/>
            },
            {
              path: '/admin/localities',
              element: <LocalityModule/>
            },
            {
              path: '/admin/offices',
              element: <DepartamentModule/>
            }
          ]
        },
        {
          path: '/statistic',
          element: <StaticModule/>
        }
      ]
    }
    
  ]);

export default Router;