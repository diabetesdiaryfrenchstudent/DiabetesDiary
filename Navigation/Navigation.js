// Navigation/Navigation.js
import React, {Component} from 'react'
import { TouchableOpacity, View, Text, Image, ScrollView, Button, TouchableHighlight} from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator, withNavigation } from 'react-navigation'
import { DrawerItems, DrawerNavigation, DrawerActions } from 'react-navigation'


import logo from '../Images/logo.png'

import WelcomePage from '../Components/Tabs/WelcomePage'
import Goals from '../Components/Tabs/Goals'
import PersonalDataTools from '../Components/Tabs/PersonalDataTools'
import Settings from '../Components/Tabs/Settings'
import MessageInbox from '../Components/Tabs/MessageInbox'
import About from '../Components/Tabs/About'
import ListOfEntries from  '../Components/Tabs/ListOfEntries'
import Graph from  '../Components/Tabs/Graph'
import AddData from '../Components/AddData'
import DataStorageInfo from '../Components/DataStorageInfo'
import Hidden from '../Navigation/Hidden'


/** Create the header for the drawer navigation menu */
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

/** Create the drawer navigation menu */
const DrawerNavigator = createDrawerNavigator({
  WelcomePage: {
    screen: WelcomePage,
    title: 'My Diabetes Diary'
  }, Graph: {
    screen: Graph,
    title: 'Graph'
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
  },
  AddData: {
    screen: AddData,
    navigationOptions:{
      drawerLabel:<Hidden/>
    }
  },
  DataStorageInfo: {
    screen: DataStorageInfo,
    navigationOptions:{
      drawerLabel:<Hidden/>
    }
  }

},{
  contentComponent: DrawerContent
})

export default createAppContainer(DrawerNavigator)
