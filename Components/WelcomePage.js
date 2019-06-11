// Components/WelcomePage.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native'
import Icon from "react-native-vector-icons/Entypo"
import { DrawerActions } from 'react-navigation'
import Modal from 'react-native-modal';

class WelcomePage extends React.Component {
  constructor(props){
    super(props)
      this._renderModalContent=this._renderModalContent.bind(this)
      this.state = {
         visibleModal: null,
       };
  }


  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      {this._renderButton('Help', () => {this.props.navigation.navigate('Help'), this.setState({ visibleModal: null})})}
      {this._renderButton('Customization', () => {this.props.navigation.navigate('Customization'), this.setState({ visibleModal: null})})}
      {this._renderButton('Personal Data Tools', () => {this.props.navigation.navigate('PersonalDataTools'), this.setState({ visibleModal: null})})}
      {this._renderButton('Preferences', () => {this.props.navigation.navigate('Preferences'), this.setState({ visibleModal: null})})}
      {this._renderButton('Message Inbox', () => {this.props.navigation.navigate('MessageInbox'), this.setState({ visibleModal: null})})}
      {this._renderButton('About', () => {this.props.navigation.navigate('About'), this.setState({ visibleModal: null})})}
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );


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
          <View>
            {this._renderButton('Default modal', () => this.setState({ visibleModal: 1 }))}
            <Modal isVisible={this.state.visibleModal === 1}>
              {this._renderModalContent()}
            </Modal>
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(75,176,221)',
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 250
  },
  textButton:{
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 12 ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})

export default WelcomePage
