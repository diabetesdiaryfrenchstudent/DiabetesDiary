// Components/WelcomePage.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"
import { DrawerActions } from 'react-navigation'
import Modal from 'react-native-modal';

import styles from '../Tools/Styles'

class WelcomePage extends React.Component {
  static navigationOptions = {
    title: 'My Diary',
  }
  constructor(props){
    super(props)
      this._renderModalContentMenu=this._renderModalContentMenu.bind(this)
      this._renderModalContentAdd=this._renderModalContentAdd.bind(this)
      this.state = {
         visibleModal: null,
       };
  }

  _renderMenuButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.MenuButton}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  _renderAddButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <Icon name='pluscircleo'
      type='AntDesign'
      style={{ fontSize:40, marginLeft: 15}}
      />
    </TouchableOpacity>
  );
  _renderTabButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContentMenu = () => (
    <View style={styles.modalContent}>
      {this._renderTabButton('Help', () => {this.props.navigation.navigate('Help'), this.setState({ visibleModal: null})})}
      {this._renderTabButton('Customization', () => {this.props.navigation.navigate('Customization'), this.setState({ visibleModal: null})})}
      {this._renderTabButton('Personal Data Tools', () => {this.props.navigation.navigate('PersonalDataTools'), this.setState({ visibleModal: null})})}
      {this._renderTabButton('Preferences', () => {this.props.navigation.navigate('Preferences'), this.setState({ visibleModal: null})})}
      {this._renderTabButton('Message Inbox', () => {this.props.navigation.navigate('MessageInbox'), this.setState({ visibleModal: null})})}
      {this._renderTabButton('About', () => {this.props.navigation.navigate('About'), this.setState({ visibleModal: null})})}
      {this._renderTabButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );
  _renderModalContentAdd = () => (
    <View style={{flexDirection: 'row-reverse', marginBottom: 20, marginRight: 10}}>
      {this._renderAddButton('c', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddButton('b', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddButton('a', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
    </View>
  );


  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
            <Text>Display goals</Text>
          </View>
          <View style={styles.box}>
            <Text>Display graph</Text>
          </View>
          <View style={styles.box}>
            <Text>Display table</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {this._renderMenuButton('Pop up menu', () => this.setState({ visibleModal: 1 }))}
            <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} isVisible={this.state.visibleModal === 1}>
              {this._renderModalContentMenu()}
            </Modal>
            {this._renderAddButton('+', () => this.setState({ visibleModal: 2 }))}
            <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} isVisible={this.state.visibleModal === 2} style={styles.bottomModal}>
              {this._renderModalContentAdd()}
            </Modal>
          </View>
        </TouchableOpacity>
      )
  }
}


export default WelcomePage
