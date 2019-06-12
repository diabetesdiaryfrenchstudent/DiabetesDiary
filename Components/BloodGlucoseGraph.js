// Components/BloodGlucoseGraph.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import styles from '../Tools/Styles'

class BloodGlucoseGraph extends React.Component {
  static navigationOptions = {
    title: 'Blood Glucose Graph',
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


export default BloodGlucoseGraph
