// Components/AddData.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import styles from '../Tools/Styles'

class AddData extends React.Component {
  static navigationOptions = {
    title: 'AddData',
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

export default AddData
