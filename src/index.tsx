import React, {useContext, createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, ReactReduxContext } from 'react-redux/es/exports';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import { Theme } from './entities/Theme';
import './index.css';
import Router from './routing/Router';
import { store } from './store/Store';
import './fonts/VTBGroupUI-Bold.otf';
import './fonts/VTBGroupUI-Light.otf';
import './fonts/VTBGroupUI-Medium.otf';
import './fonts/VTBGroupUI-Regular.otf';

export const ThemeContext = createContext<Theme>(Theme.light);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <ThemeContext.Provider value={Theme.light}>
          <RouterProvider router={Router} />
    </ThemeContext.Provider>
  </Provider>
);
