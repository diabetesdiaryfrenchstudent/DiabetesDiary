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
    checkedBluetooth: false,
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

  _messageNotifications = () => {
    if (this.checkedNotif) {
      return (<Text style={styles.TextInfos}>Show message notifications </Text>)
    } else {
      return (<Text style={styles.TextInfos}>Do not show message notifications </Text>)
    }
  }

  _BluetoothParam = () => {
    if (this.checkedBluetooth) {
      return (
      <View style={styles.settingsBox}>
          <Text style={{paddingLeft: 8}}> Device </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {this._renderButton('Polymap',this.setState({visibleModal: Polymap}))}
              {this._renderButton('Fora',this.setState({visibleModal: Fora}))}
          </View>

          <Modal isVisible={this.state.visibleModal === Polymap} onRequestClose={() => {this.setState({ visibleModal: null })}}>
              <View style={styles.modalContent}>
                  <Text style={styles.smallTitles}> Service name </Text>
                  <Text>See later</Text>
                  <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
              </View>
          </Modal>


          <Modal isVisible={this.state.visibleModal === Fora} onRequestClose={() => {this.setState({ visibleModal: null })}}>
              <View style={styles.modalContentUnits}>
                  <Text style={styles.smallTitles}> Manual import </Text>
                  <Text>See later</Text>
                  <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
              </View>
          </Modal>
      </View>
      )
    } else {
      return (null)
    }
  }

  render() {
    //Test

      return (

        <View style={styles.main_container}>
          <Header name="Settings" nav={this.props.navigation}/>

          <ScrollView>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.props.navigation.navigate('MainComponentHide')}>
              <Text style={{paddingLeft: 8}}> Your informations </Text>
              <Text style={styles.TextInfos}> Change your name, gender, focus area, goals..</Text>
            </TouchableOpacity>
              <Divider/>
            <View style={styles.settingsBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{paddingLeft: 8}}> Bluetooth </Text>
                  <Text style={styles.TextInfos}> Support for transfering blood glucose values via Bluetooth </Text>
                </View>
                <CheckBox checked={this.state.checkedBluetooth} onPress={() => this.setState({checkedBluetooth: !this.state.checkedBluetooth})} />
                {this._BluetoothParam()}
              </View>
            </View>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 2 })}>
              <Text style={{paddingLeft: 8}}> Blood glucose units </Text>
              <Text style={styles.TextInfos}> Choose your preferred unit</Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 3 })}>
              <Text style={{paddingLeft: 8}}> Weight units </Text>
              <Text style={styles.TextInfos}> Choose your preferred unit</Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 4 })}>
              <Text style={{paddingLeft: 8}}> Set food database language </Text>
              <Text style={styles.TextInfos}> Choose language of food database</Text>
            </TouchableOpacity>
            <Divider/>
            <View style={styles.settingsBox} >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{paddingLeft: 8}}> Message notifications </Text>
                  {this._messageNotifications()}
                </View>
                <CheckBox checked={this.state.checkedNotif} onPress={() => this.setState({checkedNotif: !this.state.checkedNotif})} />
              </View>
            </View>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 5 })}>
              <Text style={{paddingLeft: 8}}> RunKeeper integration </Text>
              <Text style={styles.TextInfos}> Administer your Runkeeper integration here </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 6 })}>
              <Text style={{paddingLeft: 8}}> Pebble integration </Text>
              <Text style={styles.TextInfos}> Connect Diabetes Diary to your Pebble smartwatch </Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.settingsBox} onPress={() => this.setState({ visibleModal: 7 })}>
              <Text style={{paddingLeft: 8}}> Tracking app usage </Text>
              <Text style={styles.TextInfos}> Enable or disable the app usage tracking to help researchers </Text>
            </TouchableOpacity>
            <Divider/>
          </ScrollView>




        <Modal isVisible={this.state.visibleModal === 1} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text style={styles.smallTitles}> Bluetooth </Text>
                <Text>See later</Text>
                <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
            </View>
        </Modal>


        <Modal isVisible={this.state.visibleModal === 2} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContentUnits}>
                <Text style={styles.smallTitles}> Blood glucose units </Text>
                <CheckBox  title='mg/dL' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.BGUnitG} onPress={() => {this.setState({BGUnitG: true}), this.setState({visibleModal:null})}}/>
                <CheckBox  title='mmol/L' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={!this.state.BGUnitG} onPress={() => {this.setState({BGUnitG: false}), this.setState({visibleModal:null})}}/>
                <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 3} onRequestClose={() => {this.setState({ visibleModal: null})}}>
              <View style={styles.modalContentUnits}>
                <Text style={styles.smallTitles}> Weight units </Text>
                <CheckBox  title='kg' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={!this.state.checkedWL} onPress={() => {this.setState({checkedWL: false}), this.setState({visibleModal:null})}}/>
                <CheckBox  title='lbs' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.checkedWL} onPress={() => {this.setState({checkedWL: true}), this.setState({visibleModal:null})}}/>
                <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
              </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 4} onRequestClose={() => {this.setState({ visibleModal: null})}}>
          <View style={styles.modalContentUnits}>
            <Text style={styles.smallTitles}> Food database language </Text>
            <CheckBox title='Same as the app language' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => {this.setState({language: !this.state.language}), this.setState({visibleModal:null})}}/>
            <CheckBox title='English' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => {this.setState({language: !this.state.language}), this.setState({visibleModal:null})}}/>
            <CheckBox title='Norsk' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => {this.setState({language: !this.state.language}), this.setState({visibleModal:null})}}/>
            <CheckBox title='Czech' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.language} onPress={() => {this.setState({language: !this.state.language}), this.setState({visibleModal:null})}}/>
            <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
          </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 5} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text style={styles.smallTitles}> RunKeeper integration </Text>
                <Text>See later</Text>
                <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 6} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContent}>
                <Text style={styles.smallTitles}> Pebble integration </Text>
                <Text>See later</Text>
                <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
            </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 7} onRequestClose={() => {this.setState({ visibleModal: null})}}>
            <View style={styles.modalContentUnits}>
              <Text style={styles.smallTitles}> Tracking app usage to help researchers </Text>
              <CheckBox  title='Enable' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.TrackingEnable} onPress={() => {this.setState({TrackingEnable: true}), this.setState({visibleModal:null})}}/>
              <CheckBox  title='Disable' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={!this.state.TrackingEnable} onPress={() => {this.setState({TrackingEnable: false}), this.setState({visibleModal:null})}}/>
              <Text style={styles.TextTouch} onPress={() => this.setState({ visibleModal: null })}> Annuler </Text>
          </View>
      </Modal>

      </View>

      )
  }
}



export default Settings
