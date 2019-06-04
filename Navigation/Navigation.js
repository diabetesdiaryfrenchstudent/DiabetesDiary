// Navigation/Navigation.js

import { createStackNavigator, createAppContainer  } from 'react-navigation'
import WelcomePage from '../Components/WelcomePage'
import Goals from '../Components/Goals'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: WelcomePage,
    navigationOptions: {
      title: 'Diabetes Diary'
    }
  },
  Goals: {
    screen: Goals,
    navigationOptions:{
      title: 'Goals'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
