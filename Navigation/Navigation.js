// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
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
      title: 'Diabetes Diary'
    }
  },
  Goals: {
    screen: Goals,
    navigationOptions:{
      title: 'Your Goals'
    }
  }
})

const DrawerNavigator = createDrawerNavigator({
  WelcomePage: {screen: WPStackNavigator},
  Help: {screen: Help},
  Customization: {screen: Customization},
  PersonalDataTools: {screen: PersonalDataTools},
  Preferences: {screen: Preferences},
  MessageInbox: {screen: MessageInbox},
  About: {screen: About}
},{
  drawerPosition: 'right'
})

export default createAppContainer(DrawerNavigator)
