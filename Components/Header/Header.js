import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuHeader from './MenuHeader'
import {Header} from 'react-native-elements'

export default class App extends React.Component {
  render() {
    const {name,nav}=this.props
    return (
      <Header
         leftComponent={<MenuHeader nav = {nav} name ={name}/>}
         />
    );
  }
}
