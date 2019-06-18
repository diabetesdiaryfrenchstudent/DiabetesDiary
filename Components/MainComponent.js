import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from '../Navigation/Navigation'
import {Provider} from 'react-redux'
import Store from '../Store/configureStore'

export default class App extends React.Component {
  render() {
    return (

    <Navigation/>
  
    );
  }
}
