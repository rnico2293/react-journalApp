import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { JorunalApp } from './JorunalApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JorunalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

