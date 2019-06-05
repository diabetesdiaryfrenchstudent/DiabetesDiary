// Components/WelcomePage.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';



class WelcomePage extends React.Component {
  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View style={styles.box}>
            <Text>Display goals</Text>
          </View>
          <View style={styles.box}>
            <Text>Display last data</Text>
          </View>
          <View style={styles.box}>
            <Text>Display blood glucose levels</Text>
          </View>
          <View style={styles.box}>
            <Text>Display blood glucose graph</Text>
          </View>
        </TouchableOpacity>
      )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#a0caec'
  },
  box: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10
  }
})

export default WelcomePage
