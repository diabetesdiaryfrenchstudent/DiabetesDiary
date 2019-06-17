// Components/ListOfEntries.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import styles from '../Tools/Styles'

class ListOfEntries extends React.Component {
  static navigationOptions = {
    title: 'List of entries',
  }
  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View>
            <Text>We'll see later</Text>
          </View>
        </TouchableOpacity>
      )
  }
}


export default ListOfEntries
