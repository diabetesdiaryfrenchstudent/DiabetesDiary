import { createStackNavigator , createAppContainer,DrawerItems, DrawerNavigation, DrawerActions  } from 'react-navigation'
import React, {Component} from 'react'
import Welcome from '../Welcome'
import Sexe from '../Sexe'
import Color from '../Color'
import Name from '../Name'
import Type from '../Type'
import Recap from '../Recap'
import Data from '../Data'
import BloodGlucose from '../BloodGlucose'
import MainComponent from '../../MainComponent'
import Icon from "react-native-vector-icons/Entypo"
import MainComponentWelcome from '../../MainComponentWelcome'

const WelcomeStackNavigator = createStackNavigator({

  MainComponentWelcome:{
    screen: MainComponentWelcome,
    navigationOptions:{
      title: 'Welcome',
      header:null
    }

  },

  Welcome: { //First screen of the application
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Sexe: { //Screen to choose sex
    screen: Sexe,
    navigationOptions:{
      title: 'Sex'
    }
  },
  Color:{ //Screen to choose the color of the application
    screen: Color,
    navigationOptions:{
      title:'Color'
    }
  },
  Name:{ //Screen to choose the name
    screen: Name,
    navigationOptions:{
      title: 'Name'
    }
  },
  Type:{ //Screen to choose the type of diabetes
    screen: Type,
    navigationOptions:{
      title: 'Type'
    }
  },
  Recap:{ //Screen with summary
    screen: Recap,
    navigationOptions:{
      title: 'Summary'
    }
  },
  Data:{
    screen: Data,
    navigationOptions:{
      title: 'Data'
    }
  },
  BloodGlucose:{
    screen: BloodGlucose,
    navigationOptions:{
      title: 'Blood glucose'
    }
  },
   MainComponent:{
      screen: MainComponent,
      navigationOptions:{
        title: 'Welcome',
        header:null
      }

    },

})

export default createAppContainer(WelcomeStackNavigator)
