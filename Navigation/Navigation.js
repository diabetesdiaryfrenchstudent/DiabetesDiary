// Navigation/Navigation.js
import React, {Component} from 'react'
import { TouchableOpacity, View, Text, Image, ScrollView, Button, TouchableHighlight} from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator, withNavigation } from 'react-navigation'
import { DrawerItems, DrawerNavigation, DrawerActions } from 'react-navigation'
import Icon from "react-native-vector-icons/Entypo"
import Modal from 'react-native-modal';

import logo from '../Images/logo.png'

import WelcomePage from '../Components/WelcomePage'
import Goals from '../Components/Goals'
import Customization from '../Components/Customization'
import Help from '../Components/Help'
import PersonalDataTools from '../Components/PersonalDataTools'
import Preferences from '../Components/Preferences'
import MessageInbox from '../Components/MessageInbox'
import About from '../Components/About'
import DataStorageInfo from  '../Components/DataStorageInfo'
import LastData from  '../Components/LastData'
import BloodGlucoseGraph from  '../Components/BloodGlucoseGraph'
import BloodGlucoseLevel from  '../Components/BloodGlucoseLevel'
import AddData from  '../Components/AddData'


const WPStackNavigator = createStackNavigator({
    WelcomePage: {
    screen: WelcomePage,
    navigationOptions: props => ({
      title: 'Diabetes Diary',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />,
      headerRight: //does nothing yet
        <Icon name='dots-three-horizontal'
        type='Entypo'
        style={{ fontSize:25, marginRight: 15}}
        />

    })
  }, Goals: {
    screen: Goals,
    navigationOptions: props => ({
      title: 'Goals',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  LastData: {
    screen: LastData,
    navigationOptions: props => ({
      title: 'Last Data',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  BloodGlucoseGraph: {
    screen: BloodGlucoseGraph,
    navigationOptions: props => ({
      title: 'Blood Glucose Graph',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  BloodGlucoseLevel: {
    screen: BloodGlucoseLevel,
    navigationOptions: props => ({
      title: 'Blood Glucose Level',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  }, Help: {
    screen: Help,
    navigationOptions:{title: 'Help'}
  },  Customization: {
    screen: Customization,
    navigationOptions:{title: 'Customization'}
  },  PersonalDataTools: {
    screen: PersonalDataTools,
    navigationOptions:{title: 'Personal Data Tools'}
  },  Preferences: {
    screen: Preferences,
    navigationOptions:{title: 'Preferences'}
  },  MessageInbox: {
    screen: MessageInbox,
    navigationOptions:{title: 'Message Inbox'}
  },  About: {
    screen: About,
    navigationOptions:{title: 'About'}
  },  DataStorageInfo: {
    screen: DataStorageInfo,
    navigationOptions:{title: 'Data Storage'}
  },  AddData: {
    screen: AddData,
    navigationOptions:{title: 'Add Data'}
  }
})

const DrawerContent = (props) => (
  <View>
    <View style={{
      height: 180,
      backgroundColor: 'rgb(75,176,221)',
      alignItems: 'center',
      justifyContent: 'center',
      }}>
      <Image source={logo}/>
      <Text style={{ marginTop:15, color: 'white', fontSize: 30 }}> Diabetes Diary </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </View>
)

const DrawerNavigator = createDrawerNavigator({
  WelcomePage: {
    screen: WPStackNavigator,
    title: 'My Diabetes Diary'
  }, Goals: {
    screen: Goals,
    title: 'Goals'
  }, LastData: {
    screen: LastData,
    title: 'Last Data'
  },  BloodGlucoseGraph: {
    screen: BloodGlucoseGraph,
    title: 'Blood Glucose Graph'
  },  BloodGlucoseLevel: {
    screen: BloodGlucoseLevel,
    title: 'Blood Glucose Level'
  }
},{
  contentComponent: DrawerContent
})

export default createAppContainer(DrawerNavigator)
