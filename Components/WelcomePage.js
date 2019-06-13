// Components/WelcomePage.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button, Image} from 'react-native'
import { DrawerActions } from 'react-navigation'
import Modal from 'react-native-modal';

import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from '../Tools/Styles'

import insulinIcon from '../Images/insulin_syringe.png'
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



  _renderAddInsulinDataButton = (logosrc, onPress ) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.CircleShapeView}>
        <Image source={logosrc} style={{height: 35, width: 35}} />
      </View>
    </TouchableOpacity>
  );

  _renderIconButton = (TypeIcon, name, onPress ) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.CircleShapeView}>
        <TypeIcon name={name} style={{fontSize:40}} />
      </View>
    </TouchableOpacity>
  );



  _renderModalContentAdd = () => (
    <View style={{flexDirection: 'row-reverse', justifyContent: 'center', marginBottom: 40}}>
      {this._renderIconButton(FontAwesome, 'tint', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderAddInsulinDataButton(insulinIcon, () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderIconButton(MaterialCommunityIcons, 'food-fork-drink', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderIconButton(MaterialCommunityIcons, 'bike', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderIconButton(MaterialCommunityIcons, 'scale-bathroom', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}
      {this._renderIconButton(MaterialCommunityIcons, 'pill', () => {this.props.navigation.navigate('AddData'), this.setState({ visibleModal: null})})}

    </View>
  );

//not used yet bc of unworking header button
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
          <TouchableOpacity onPress={ () => this.setState({ visibleModal: 2 })} >
            <View style={styles.CircleShapeView}>
              <AntDesignIcon name='pluscircleo' style={{fontSize:50}} />
            </View>
          </TouchableOpacity>

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
