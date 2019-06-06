// Components/MessageInbox.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
//Might use Panel : import Panel from 'react-native-panel';

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

export default MessageInbox
