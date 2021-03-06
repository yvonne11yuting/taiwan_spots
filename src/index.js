import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from './js/reducers';
import App from './js/components/presentational/app';
import SpotDetail from './js/components/container/spot_detail';
import Layout from './js/components/container/layout';

import './css/main.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/:id" component={SpotDetail}/>
          <Route path="/" component={App}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
  , document.getElementById("app"));