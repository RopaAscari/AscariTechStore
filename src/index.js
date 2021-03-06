import './index.scss';
import App from './App';
import React from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Doc from './components/title/title'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware ,compose} from "redux"
import {GlobalReducers} from './reducer/GlobalReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(GlobalReducers);

ReactDOM.render(
   <React.StrictMode>
        <Provider store={store}>
         <App />
         <Doc />       
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
