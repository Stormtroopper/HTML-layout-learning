import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { combineReducers,createStore,applyMiddleware } from 'redux'
import {thunk} from'redux-thunk'
import './index.css'
import loginReducer from './store/loginreducer.js'
import productReducer from './store/productreducer.js'
import {Provider} from 'react-redux';
const mainreducer=combineReducers({lr:loginReducer,pr:productReducer})
const store=createStore(mainreducer,applyMiddleware(thunk));
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>,
)
