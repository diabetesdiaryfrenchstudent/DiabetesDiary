// Components/Settings.js

import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import Modal from 'react-native-modal'
import { Divider, CheckBox } from 'react-native-elements'
import Header from '../Header/Header'
import styles from '../../Tools/Styles'

class Settings extends React.Component {
  state = {
    visibleModal: null,
    checkedNotif: false,
    BGUnitG: false,
    checkedWL: false,
    language: false,
    TrackingEnable: true,
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
          <Header name="Settings" nav={this.props.navigation}/>

          <ScrollView>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.props.navigation.navigate('MainComponentHide')}>
              <Text>   Your informations (Focus area, goals, diabetes type..) </Text>
            </TouchableOpacity>
              <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 1 })}>
              <Text>   Bluetooth </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text>   Blood glucose units </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 3 })}>
              <Text>   Weight units </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 4 })}>
              <Text>   Set food database language </Text>
            </TouchableOpacity>
            <Divider/>
            <View style={styles.settingsBox} >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>   Message notifications </Text>
              <CheckBox checked={this.state.checkedNotif} onPress={() => this.setState({checkedNotif: !this.state.checkedNotif})} />
              </View>
            </View>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 5 })}>
              <Text>   RunKeeper integration </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 6 })}>
              <Text>   Pebble integration </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 7 })}>
              <Text>   Tracking app usage </Text>
            </TouchableOpacity>
            <Divider/>
          </ScrollView>




        <Modal isVisible={this.state.visibleModal === 1} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <TouchableOpacity style={{flex:1, justifyContent: 'center', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
            <View style={styles.modalContent}>
                <Text>See new Bluetooth interface with Manon</Text>
                {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
            </View>
          </TouchableOpacity>
        </Modal>


        <Modal isVisible={this.state.visibleModal === 2} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContentUnits}>
                <Text> Blood glucose units </Text>
                  <CheckBox  title='mg/dL' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.BGUnitG} onPress={() => this.setState({BGUnitG: !this.state.BGUnitG})}/>
                  <CheckBox  title='mmol/L' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={!this.state.BGUnitG} onPress={() => this.setState({BGUnitG: !this.state.BGUnitG})}/>
                <View>{this._renderButton('Valider', () => this.setState({ visibleModal: null }))}</View>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 3} onRequestClose={() => {this.setState({ visibleModal: null})}}>
              <View style={styles.modalContentUnits}>
              <Text> Weight units </Text>
                <CheckBox  title='kg' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={!this.state.checkedWL} onPress={() => this.setState({checkedWL: !this.state.checkedWL})}/>
                <CheckBox  title='lbs' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.checkedWL} onPress={() => this.setState({checkedWL: !this.state.checkedWL})}/>
              <View>{this._renderButton('Valider', () => this.setState({ visibleModal: null }))}</View>
              </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 4} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <View style={styles.modalContentUnits}>
            <Text> Set food database language </Text>
              <CheckBox  title='Same as the app language' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => this.setState({language: !this.state.language})}/>
              <CheckBox  title='English' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => this.setState({language: !this.state.language})}/>
              <CheckBox  title='Norsk' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => this.setState({language: !this.state.language})}/>
              <CheckBox  title='Czech' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => this.setState({language: !this.state.language})}/>
            <View>{this._renderButton('Valider', () => this.setState({ visibleModal: null }))}</View>
          </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 5} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <TouchableOpacity style={{flex:1, justifyContent: 'center', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
            <View style={styles.modalContent}>
                <Text>See later</Text>
                {this._renderButton('Valider', () => this.setState({ visibleModal: null }))}
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 6} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <TouchableOpacity style={{flex:1, justifyContent: 'center', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
            <View style={styles.modalContent}>
                <Text>See later</Text>
                {this._renderButton('Valider', () => this.setState({ visibleModal: null }))}
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 7} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <TouchableOpacity style={{flex:1, justifyContent: 'center', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
            <View style={styles.modalContent}>
                <Text>Tracking app usage</Text>
                <CheckBox  title='Enable the tracking of the app usage to help researchers' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.TrackingEnable} onPress={() => this.setState({TrackingEnable: !this.state.TrackingEnable})}/>
                <CheckBox  title='Disable the tracking of the app usage' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={!this.state.TrackingEnable} onPress={() => this.setState({TrackingEnable: !this.state.TrackingEnable})}/>
                {this._renderButton('Valider', () => this.setState({ visibleModal: null }))}
            </View>
          </TouchableOpacity>
        </Modal>


      </View>

      )
  }
}



export default Settings
