// Components/WelcomePage.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native'
import Icon from "react-native-vector-icons/Entypo"
import { DrawerActions } from 'react-navigation'

class WelcomePage extends React.Component {
  static navigationOptions = {
    title: 'Your Diabetes Diary',
  }

  constructor(props){
    super(props)
      this._openMenu=this._openMenu.bind(this)
  }
  _openMenu(){
      this.props.navigation.dispatch(DrawerActions.openDrawer());
  }


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
    backgroundColor: 'rgb(221,234,242)'
  },
  box: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10
  }
})

export default WelcomePage
