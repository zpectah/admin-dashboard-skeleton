import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import './i18n';
import './styles/index.scss';
import store from './store'
import { App } from 'modules';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
