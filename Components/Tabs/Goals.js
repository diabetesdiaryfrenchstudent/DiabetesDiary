// Components/Goals.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Header from '../Header/Header'
import styles from '../../Tools/Styles'

class Goals extends React.Component {
  static navigationOptions = {
    title: 'Goals',
  }
  render() {
      return (
        <View style={styles.main_container}>
          <Header name="Goals" nav={this.props.navigation}/>
          <View style={styles.box}>
            <Text>We'll see later</Text>
          </View>
        </View>
      )
  }
}


export default Goals
