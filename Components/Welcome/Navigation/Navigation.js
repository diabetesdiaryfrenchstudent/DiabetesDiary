import { createStackNavigator , createAppContainer } from 'react-navigation'
import Welcome from '../Welcome'

const WelcomeStackNavigator = createStackNavigator({
  Welcome: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome'
    }
  }
})

export default createAppContainer(WelcomeStackNavigator)
