import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './state/state'
// import store from './Redux/storeRedux'


function reRenender () {
    ReactDOM.render(<App store = {store} />, document.getElementById('root'));
}
reRenender(store.getState);
store.subscriber(reRenender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
