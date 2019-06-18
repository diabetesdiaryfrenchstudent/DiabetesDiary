// Components/WelcomePage.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Button, Image} from 'react-native'
import { DrawerActions } from 'react-navigation'
import Modal from 'react-native-modal';

import AntDesign from 'react-native-vector-icons/AntDesign'
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


  /** Create a round button with an image
  logosrc : image to display
  onPress : action when clicking */
  _renderAddInsulinDataButton = (logosrc, onPress ) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.CircleShapeView}>
        <Image source={logosrc} style={{height: 35, width: 35}} />
      </View>
    </TouchableOpacity>
  );


/** Create a round button with design based on an icon
TypeIcon : Entypo, AntDesign,..
name : name of the icon to display
onPress : action when clicking */
  _renderIconButton = (TypeIcon, name, onPress ) => (
    <View style={styles.CircleShapeView}>
      <TypeIcon name={name} style={{fontSize:40}} onPress={onPress}/>
    </View>
  );


  /** Create the bottom menu (to add all kind of data) */
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

/** Display modal with help tutorial images */
//not used yet bc of unworking header button
_helpContent = () => (
    <View>
    <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} onRequestClose={() => {this.setState({ visibleModal: null})}} isVisible={this.state.visibleModal === 2} style={styles.bottomModal}>
      <TouchableOpacity style={{flex:1, justifyContent: 'flex-end', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
        <Image source={h1}/>
      </TouchableOpacity>
    </Modal>
    </View>
);



  render() {
      return (
        <View style={styles.main_container}>
          <TouchableOpacity style={{flex:1,justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Goals')}>
            <Text>Display goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('Graph')}>
            <Text>Display graph</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('ListOfEntries')}>
            <Text>Display table</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 28}}>
          {this._renderIconButton(AntDesign, 'pluscircleo', () => this.setState({ visibleModal: 2 }))}

            <Modal backdropColor={'rgba(0, 0, 0, 0.50)'} onRequestClose={() => {this.setState({ visibleModal: null})}} isVisible={this.state.visibleModal === 2} style={styles.bottomModal}>
                <TouchableOpacity style={{flex:1, justifyContent: 'flex-end', marginRight:10}} onPress={()=>this.setState({visibleModal:null})}>
                  {this._renderModalContentAdd()}
                </TouchableOpacity>
            </Modal>
          </View>
        </View>
      )
  }
}


export default WelcomePage
