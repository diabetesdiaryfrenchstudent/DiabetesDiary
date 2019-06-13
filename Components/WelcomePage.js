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

import h1 from '../Images/Help/tutorial_homescreen.png'

class WelcomePage extends React.Component {
  static navigationOptions = {
    title: 'My Diary',
  }

  constructor(props){
    super(props)
      this._renderModalContentAdd=this._renderModalContentAdd.bind(this)
      this.state = {
         visibleModal: null,
       };
  }


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




  _renderModalContentAdd = () => (
    <View style={{flexDirection: 'row-reverse', justifyContent: 'center', marginBottom: 40}}>
      {this._renderAddDataButton(addBloodDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addInsulinDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addCaloriesDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addActivityDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addWeightDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddDataButton(addMedicationDataIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
    </View>
  );

_helpContent = () => (
  <View>
    <TouchableOpacity style={{flex:1, justifyContent: 'flex-end', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
      <Image source={h1}/>
    </TouchableOpacity>
  </View>
);


  render() {
      return (
        <View style={styles.main_container}>
          <TouchableOpacity style={{flex:1,justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Goals')}>
            <Text>Display goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('BloodGlucoseGraph')}>
            <Text>Display graph</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('BloodGlucoseLevel')}>
            <Text>Display table</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 28}}>
            {this._renderAddButton(() => this.setState({ visibleModal: 2 }))}
            <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} onRequestClose={() => {this.setState({ visibleModal: null})}} isVisible={this.state.visibleModal === 2} style={styles.bottomModal}>
              <View>
                <TouchableOpacity style={{flex:1, justifyContent: 'flex-end', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
                  {this._renderModalContentAdd()}
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>
      )
  }
}


export default WelcomePage
