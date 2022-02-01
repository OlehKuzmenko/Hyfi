import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@redux/index';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthLayoutBlock from '@layouts/Auth/AuthLayout';
import { ValidatorProvider } from 'react-class-validator';

ReactDOM.render(
  <React.StrictMode>
    <ValidatorProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <AuthLayoutBlock>
              <App />
            </AuthLayoutBlock>
          </Router>
        </PersistGate>
      </Provider>
    </ValidatorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
