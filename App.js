import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Welcome/Navigation/Navigation'
import {Provider} from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
    <Navigation/>
    </Provider>
    );
  }
}
