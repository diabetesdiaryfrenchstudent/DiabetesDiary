// Components/PersonalDataTools.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import styles from '../../Tools/Styles'

class PersonalDataTools extends React.Component {
  static navigationOptions = {
    title: 'Personal Data Tools',
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


export default PersonalDataTools
