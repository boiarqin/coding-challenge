import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './App';
import appReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(appReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
