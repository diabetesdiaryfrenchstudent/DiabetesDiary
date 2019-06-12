// Components/WelcomePage.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button, Image} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"
import { DrawerActions } from 'react-navigation'
import Modal from 'react-native-modal';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

import styles from '../Tools/Styles'
import addBloodDataIcon from '../Images/created/add_blood.png'
import addActivityDataIcon from '../Images/created/add_activity.png'
import addCaloriesDataIcon from '../Images/created/add_calories.png'
import addCarbohydratesDataIcon from '../Images/created/add_carbohydrates.png'
import addInsulinDataIcon from '../Images/created/add_insulin.png'
import addMedicationDataIcon from '../Images/created/add_medication.png'
import addWeightDataIcon from '../Images/created/add_weight.png'

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
  _renderTabButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderAddButton = (onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.CircleShapeView}>
        <Icon name='pluscircleo'
        type='AntDesign'
        style={{fontSize:50}}
        />
      </View>
    </TouchableOpacity>
  );
  _renderAddDataButton = (logosrc, onPress ) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.CircleShapeView}>
        <Image source={logosrc} style={{height: 35, width: 35}} />
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

    </View>
  );

  _renderModalContentAdd = () => (
    <View style={{marginBottom: 10, paddingRight: 10}}>
      <View style={{flexDirection: 'row-reverse'}}>
      {this._renderAddDataButton(addBloodDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addInsulinDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addCaloriesDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addActivityDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addWeightDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addMedicationDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      </View>
      <View style={{flexDirection: 'row-reverse'}}>
        {this._renderAddButton(() => this.setState({ visibleModal: null }))}
      </View>
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
            <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} onRequestClose={() => {this.setState({ visibleModal: null})}} isVisible={this.state.visibleModal === 1}>
              {this._renderModalContentMenu()}
            </Modal>
            {this._renderAddButton(() => this.setState({ visibleModal: 2 }))}
            <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} onRequestClose={() => {this.setState({ visibleModal: null})}} isVisible={this.state.visibleModal === 2} style={styles.bottomModal}>
              <View style={{marginBottom: 20, marginRight: 25}}>
                {this._renderModalContentAdd()}
              </View>
            </Modal>
          </View>
        </TouchableOpacity>
      )
  }
}


export default WelcomePage
