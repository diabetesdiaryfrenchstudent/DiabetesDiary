// Navigation/Navigation.js
import React from 'react'
import { TouchableOpacity, View, Text, Image, ScrollView, Button} from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import { DrawerItems, DrawerNavigation } from 'react-navigation'
import Icon from "react-native-vector-icons/Entypo"

import logo from '../Images/logo.png'

import WelcomePage from '../Components/WelcomePage'
import Goals from '../Components/Goals'
import Customization from '../Components/Customization'
import Help from '../Components/Help'
import PersonalDataTools from '../Components/PersonalDataTools'
import Preferences from '../Components/Preferences'
import MessageInbox from '../Components/MessageInbox'
import About from '../Components/About'

const WPStackNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      title: 'Diabetes Diary',
      headerRight:
        <Icon name='menu'
        type='Entypo'
        style={{ fontSize:30, marginRight: 15}}
        onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
    }
  },
  Goals: {
    screen: Goals,
    navigationOptions:{
      title: 'Your Goals'
    }
  }
})

const DrawerContent = (props) => (
  <View>
    <View style={{
      height: 180,
      backgroundColor: '#a0caec',
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
  Help: {screen: Help},
  Customization: {screen: Customization},
  PersonalDataTools: {screen: PersonalDataTools},
  Preferences: {screen: Preferences},
  MessageInbox: {screen: MessageInbox},
  About: {screen: About}
},{
  drawerPosition: 'right',
  contentComponent: DrawerContent
})

export default createAppContainer(DrawerNavigator)
