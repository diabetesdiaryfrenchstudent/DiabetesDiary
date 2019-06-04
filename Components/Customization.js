// Components/Customization.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

class Customization extends React.Component {
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

export default Customization
