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
import Help from '../Components/Help'
import PersonalDataTools from '../Components/PersonalDataTools'
import Settings from '../Components/Settings'
import MessageInbox from '../Components/MessageInbox'
import About from '../Components/About'
import DataStorageInfo from  '../Components/DataStorageInfo'
import ListOfEntries from  '../Components/ListOfEntries'
import BloodGlucoseGraph from  '../Components/BloodGlucoseGraph'
import BloodGlucoseLevel from  '../Components/BloodGlucoseLevel'
import AddData from  '../Components/AddData'
import Tables from  '../Components/Tables'


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
  },  ListOfEntries: {
    screen: ListOfEntries,
    navigationOptions: props => ({
      title: 'List of entries',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  PersonalDataTools: {
    screen: PersonalDataTools,
    navigationOptions: props => ({
      title: 'Personal Data Tools',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  Settings: {
    screen: Settings,
    navigationOptions: props => ({
      title: 'Settings',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  MessageInbox: {
    screen: MessageInbox,
    navigationOptions: props => ({
      title: 'Message Inbox',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  About: {
    screen: About,
    navigationOptions: props => ({
      title: 'About',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  DataStorageInfo: {
    screen: DataStorageInfo,
    navigationOptions: props => ({
      title: 'Data Storage',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  AddData: {
    screen: AddData,
    navigationOptions: props => ({
      title: 'Add Data',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
  },  Tables: {
    screen: Tables,
    navigationOptions: props => ({
      title: 'Table',
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
    navigationOptions: props => ({
      title: 'Help',
      headerLeft:
         <Icon name='menu'
         type='Entypo'
         style={{ fontSize:30, marginLeft: 15}}
         onPress={() => props.navigation.openDrawer() }
        />})
}})



const DrawerContent = (props) => (
  <View>
    <View style={{
      height: 180,
      backgroundColor: 'rgb(75,176,221)',
      alignItems: 'center',
      justifyContent: 'center',
      }}>

      <Text style={{ marginTop:15, color: 'white', fontSize: 30 }}> Diabetes Diary </Text>
      <Image source={logo}/>

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
  }, Tables: {
    screen: Tables,
    title: 'Tables'
  }, ListOfEntries: {
    screen: ListOfEntries,
    title: 'List of entries'
  }, MessageInbox: {
    screen: MessageInbox,
    title: 'Message Inbox'
  }, PersonalDataTools: {
    screen: PersonalDataTools,
    title: 'Personal Data Tools'
  }, Settings: {
    screen: Settings,
    title: 'Settings'
  }, About: {
    screen: About,
    title: 'About'
  }
},{
  contentComponent: DrawerContent
})

export default createAppContainer(DrawerNavigator)
