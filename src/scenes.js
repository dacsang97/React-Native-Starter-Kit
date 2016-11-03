/**
 * Created by sang on 11/3/16.
 */
import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';

import SignIn from './containers/SignIn';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={SignIn} title="Login"/>
  </Scene>
)

export default scenes;
