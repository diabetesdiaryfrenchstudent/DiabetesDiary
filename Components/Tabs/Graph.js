// Components/Graph.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Header from '../Header/Header'
import styles from '../../Tools/Styles'

class Graph extends React.Component {
  render() {
      return (
        <View style={styles.main_container}>
          <Header name="Graph" nav={this.props.navigation}/>
          <View>
            <Text>We'll see later </Text>
          </View>
        </View>
      )
  }
}



export default Graph
