import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import store from './model/store';
import {history} from './model/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(
    <Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
</Provider>, document.getElementById('app'));
serviceWorker.unregister();

