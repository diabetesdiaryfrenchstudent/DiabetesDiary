// Components/Preferences.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

class Preferences extends React.Component {
  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View>
            <Text>Access bluetooth & notification options, pannels to chose units.. </Text>
          </View>
        </TouchableOpacity>
      )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'rgb(221,234,242)',
  },
  box: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10
  }
})

export default Preferences
