// Components/MessageInbox.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
//Might use Panel : import Panel from 'react-native-panel';

import styles from '../../Tools/Styles'

class MessageInbox extends React.Component {
  static navigationOptions = {
    title: 'Message Inbox',
  }
  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View>
            <Text>Create an inbox to see messages</Text>
          </View>
        </TouchableOpacity>
      )
  }
}



export default MessageInbox
