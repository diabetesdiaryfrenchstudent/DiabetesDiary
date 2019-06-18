// Components/MessageInbox.js

import React from 'react'
import Header from '../Header/Header'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
//Might use Panel : import Panel from 'react-native-panel';

import styles from '../../Tools/Styles'

class MessageInbox extends React.Component {
  static navigationOptions = {
    title: 'Message Inbox',
  }
  render() {
      return (
        <View style={styles.main_container}>
          <Header name="Message Inbox" nav={this.props.navigation}/>
          <View>
            <Text>Create an inbox to see messages</Text>
          </View>
        </View>
      )
  }
}



export default MessageInbox
