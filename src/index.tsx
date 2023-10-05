import React, {useContext, createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from './entities/Theme';
import './index.css';

export const ThemeContext = createContext<Theme>(Theme.light);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContext.Provider value={Theme.light}>
        <App />
  </ThemeContext.Provider>
);
