// Components/PersonalDataTools.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Header from '../Header/Header'
import styles from '../../Tools/Styles'

class PersonalDataTools extends React.Component {
  static navigationOptions = {
    title: 'Personal Data Tools',
  }
  render() {
      return (

        <View style={styles.main_container}>
          <Header name="PersonalDataTools" nav={this.props.navigation}/>
          <View style={styles.box}>
            <Text>We'll see later</Text>
          </View>
        </View>
      )
  }
}


export default PersonalDataTools
