import React, {useContext, createContext} from 'react';
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
import { ConfigProvider } from 'antd';

export const ThemeContext = createContext<Theme>(Theme.light);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <ThemeContext.Provider value={Theme.dark}>
      <ConfigProvider theme={{
        token: {
          colorBgContainer: '#1A1D24',
          colorBorder: '#363E4B',
          colorText: '#fff' ,
          colorTextPlaceholder: '#A7B0BF',
          borderRadius: 15,
          controlHeight: 55,
          fontFamily: 'VTBGroupUI',
          colorPrimary: '#0450C0',
          colorIcon: '#fff',
          colorBgElevated: '#1A1D24'
        },
        components: {
          Table:{
            headerBg: '#363E4B',
            headerBorderRadius: 15,
            headerColor: '#fff',
            borderColor: '#ffffff00',
            headerSplitColor: '#ffffff00',
            rowExpandedBg: '#1A1D24'
          },
          Select: {
            clearBg: '#363E4B',
            selectorBg: '#363E4B',
            multipleItemBg: '#363E4B',
            optionActiveBg: '#363E4B',
            optionSelectedBg: '#0450C0',
            optionSelectedColor: '#fff'
          }
        }
      }}>
          <RouterProvider router={Router} />
      </ConfigProvider>
    </ThemeContext.Provider>
  </Provider>
);
