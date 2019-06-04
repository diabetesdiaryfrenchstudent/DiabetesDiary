// Navigation/Navigation.js

import { createStackNavigator, createAppContainer  } from 'react-navigation'
import WelcomePage from '../Components/WelcomePage'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: WelcomePage,
    navigationOptions: {
      title: 'Diabetes Diary'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
