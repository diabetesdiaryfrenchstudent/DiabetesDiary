// Components/Goals.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import styles from '../Tools/Styles'

class Goals extends React.Component {
  static navigationOptions = {
    title: 'Goals',
  }
  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View style={styles.box}>
            <Text>We'll see later</Text>
          </View>
        </TouchableOpacity>
      )
  }
}


export default Goals
