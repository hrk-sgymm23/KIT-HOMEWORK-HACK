import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { getFirestore } from 'firebase/firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import { reduxFirestore } from 'redux-firestore';
import firebase from '@firebase/app-compat';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig, firebase),
    reactReduxFirebase(fbConfig, firebase)
  )
);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
