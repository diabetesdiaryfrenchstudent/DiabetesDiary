// Components/ListOfEntries.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Header from '../Header/Header'
import styles from '../../Tools/Styles'

class ListOfEntries extends React.Component {
  static navigationOptions = {
    title: 'List of entries',
  }
  render() {
      return (
        <View style={styles.main_container}>
          <Header name="ListOfEntries" nav={this.props.navigation}/>
          <View>
            <Text>We'll see later</Text>
          </View>
        </View>
      )
  }
}


export default ListOfEntries
