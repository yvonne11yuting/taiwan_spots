import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from './js/reducers';
import App from './js/components/container/app';
import SpotDetail from './js/components/container/spot_detail';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:id" component={SpotDetail}/>
          <Route path="/" component={App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById("app"));