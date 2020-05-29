import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Card, Form } from 'react-bootstrap';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css';

import App from './components/App';
import LoginForm from './components/LoginForm';
import CharacterList from './containers/CharacterList';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ })
    :
    compose;

const store = createStore(reducers,
    {},
    compose(composeEnhancers(applyMiddleware(reduxThunk))));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
    , document.getElementById('root'));
