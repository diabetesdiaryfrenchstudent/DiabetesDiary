// Components/Settings.js

import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import Modal from 'react-native-modal'
import { Divider, CheckBox } from 'react-native-elements'

import styles from '../../Tools/Styles'

class Settings extends React.Component {
  state = {
    visibleModal: null,
    checked: false,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity style={{flex:1}} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
        <Text> Design modals </Text>
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );


  render() {
      return (
        <View style={styles.main_container}>
          <View style={{flexDirection: 'row'}}>
            {this._renderButton('Your name', () => this.setState({ visibleModal: 1 }))}
            {this._renderButton('Focus area', () => this.setState({ visibleModal: 2 }))}
          </View>
          <View style={{flexDirection: 'row'}}>
            {this._renderButton('Display', () => this.setState({ visibleModal: 1 }))}
            {this._renderButton('Your goals', () => this.setState({ visibleModal: 2 }))}
          </View>
          <View style={{flexDirection: 'row'}}>
            {this._renderButton('Gender', () => this.setState({ visibleModal: 1 }))}
            {this._renderButton('Diabetes type', () => this.setState({ visibleModal: 2 }))}
          </View>

          <ScrollView>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Bluetooth </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Blood glucose units </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Weight units </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Set food database language </Text>
            </TouchableOpacity>
            <Divider/>
            <View style={styles.settingsBox} >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>   Message notifications </Text>
              <CheckBox checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})} />
              </View>
            </View>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   RunKeeper integration </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Pebble integration </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Tracking app usage </Text>
            </TouchableOpacity>
            <Divider/>
          </ScrollView>




        <Modal isVisible={this.state.visibleModal === 1} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <TouchableOpacity style={{flex:1, justifyContent: 'flex-end', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
            <View style={styles.modalContent}>
                <Text>See Aurelien's pages</Text>
                {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
            </View>
          </TouchableOpacity>
        </Modal>


        <Modal isVisible={this.state.visibleModal === 2} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <TouchableOpacity style={{flex:1, justifyContent: 'center'}} onPress={()=>this.setState({visibleModal:null})}>
              <View style={styles.modalContent}>
                <Text> Design modals </Text>
                <View>{this._renderButton('Close', () => this.setState({ visibleModal: null }))}</View>
              </View>
            </TouchableOpacity>
        </Modal>


      </View>

      )
  }
}



export default Settings
