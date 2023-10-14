import React, {useContext, createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, ReactReduxContext } from 'react-redux/es/exports';
import { RouterProvider } from 'react-router-dom';
import { Theme } from './entities/Theme';
import './index.css';
import Router from './routing/Router';
import { store } from './store/Store';
import './fonts/VTBGroupUI-Bold.otf';
import './fonts/VTBGroupUI-Light.otf';
import './fonts/VTBGroupUI-Medium.otf';
import './fonts/VTBGroupUI-Regular.otf';
import { ThemeProvider } from './ThemeProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const onClick = () => {
  
}

root.render(
  <Provider store = {store}>
    <ThemeProvider>
          <RouterProvider router={Router} />
    </ThemeProvider>
  </Provider>
);

