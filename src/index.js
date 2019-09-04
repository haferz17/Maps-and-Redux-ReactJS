import React from 'react';
import { render } from 'react-dom';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import allReducers from './reducers';
import UserContainer from './containers/UserContainer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import RootSaga from './sagas/RootSaga'; 

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(RootSaga);

render(
  <Provider store={store}>
    <UserContainer />
  </Provider>,
  document.getElementById('root'),
);