import { createStackNavigator , createAppContainer } from 'react-navigation'
import Welcome from '../Welcome'
import Sexe from '../Sexe'
import Color from '../Color'
import Name from '../Name'
import Type from '../Type'
import Recap from '../Recap'

const WelcomeStackNavigator = createStackNavigator({
  Welcome: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Sexe: {
    screen: Sexe,
    navigationOptions:{
      title: 'Sexe'
    }
  },
  Color:{
    screen: Color,
    navigationOptions:{
      title:'Color'
    }
  },
  Name:{
    screen: Name,
    navigationOptions:{
      title: 'Name'
    }
  },
  Type:{
    screen: Type,
    navigationOptions:{
      title: 'Type'
    }
  },
  Recap:{
    screen: Recap,
    navigationOptions:{
      title: 'Recap'
    }
  }
})

export default createAppContainer(WelcomeStackNavigator)
