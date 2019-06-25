import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Welcome/Navigation/Navigation'
import {Provider} from 'react-redux'
import Store from './Store/configureStore'
import MainComponent from './Components/MainComponent'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
    <MainComponent/>
    </Provider>
    );
  }
}
