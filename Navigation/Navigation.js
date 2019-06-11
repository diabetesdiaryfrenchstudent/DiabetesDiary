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
      headerRight:
        <Icon name='dots-three-horizontal'
        type='Entypo'
        style={{ fontSize:25, marginRight: 15}}
        onPress={() => { _renderModalContent() }}
        />

    })
  },
  Goals: {
    screen: Goals,
    navigationOptions:{title: 'Goals'}
  },  LastData: {
    screen: LastData,
    navigationOptions:{title: 'Last Data'}
  },  BloodGlucoseGraph: {
    screen: BloodGlucoseGraph,
    navigationOptions:{title: 'Blood Glucose Graph'}
  },  BloodGlucoseLevel: {
    screen: BloodGlucoseLevel,
    navigationOptions:{title: 'Blood Glucose Level'}
  },  Help: {
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
  WelcomePage: {screen: WPStackNavigator},
  Goals: {screen: Goals},
  LastData: {screen: LastData},
  BloodGlucoseLevel: {screen: BloodGlucoseLevel},
  BloodGlucoseGraph: {screen: BloodGlucoseGraph}
},{
  contentComponent: DrawerContent
})

export default createAppContainer(DrawerNavigator)
