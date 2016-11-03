/**
 * Created by sang on 11/3/16.
 */
import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
import scenes from './scenes';

const store = configureStore();
const RouterWithRedux = connect()(Router);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    );
  }
}
