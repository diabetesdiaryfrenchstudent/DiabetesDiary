// Components/Goals.js

import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

class Goals extends React.Component {
  render() {
      return (

          <View style={styles.main_container}>
            <Text>Display goals</Text>
          </View>

      )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#a0caec'
  }
})

export default Goals
