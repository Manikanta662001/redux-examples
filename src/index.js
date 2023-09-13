import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux-saga
import {Provider} from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'//used to create saga in our app
import mySaga from './redux-saga/Sagas';
import myReducer from './redux-saga/reducers';
const root = ReactDOM.createRoot(document.getElementById('root'));
const sagamiddleware = createSagaMiddleware()
const rootReducer =combineReducers({myReducer}) //in case you have more than one reducer just comma seprate them here
const store = configureStore({
  reducer:rootReducer,
  middleware:[sagamiddleware]

})

sagamiddleware.run(mySaga)
//
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
    <App />
    </Provider>
   
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
