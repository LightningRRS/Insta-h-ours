/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react'
import App from './App';
import {name as appName} from './app.json';
import {userProvider as UserProvider} from './src/Context/UserContext';

AppRegistry.registerComponent(
  appName,
  () => (props) => (
    <UserProvider>
      <App {...props} />
    </UserProvider>
  ),
  () => App,
);

