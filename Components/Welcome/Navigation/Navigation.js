import { createStackNavigator , createAppContainer } from 'react-navigation'
import Welcome from '../Welcome'
import Sexe from '../Sexe'
import Color from '../Color'
import Name from '../Name'
import Type from '../Type'
import Recap from '../Recap'

const WelcomeStackNavigator = createStackNavigator({
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
  }
})

export default createAppContainer(WelcomeStackNavigator)
