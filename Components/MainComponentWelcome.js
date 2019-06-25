import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import Navigation from './Welcome/Navigation/Navigation'
import {Provider} from 'react-redux'
import Store from '../Store/configureStore'
import Icon from "react-native-vector-icons/Entypo"
import { DrawerItems, DrawerNavigation, DrawerActions } from 'react-navigation'
import { connect } from 'react-redux'
import MainComponentDrawer from './MainComponentDrawer'
import { StackActions, NavigationActions } from 'react-navigation';
class MainComponentWelcome extends React.Component {

//   static navigationOptions = ({navigation})=>{
//     return{
//     headerLeft:
//           <Button title='menu'
//            style={{ fontSize:30, marginLeft: 15}}
//            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//             />,
//   };
// };
  componentDidMount(){
    if(this.props.param.endInit){


        this.props.navigation.dispatch(recapReset);


    }else{
      this.props.navigation.dispatch(welcomeReset);
    }
  }

  render() {


    return(
      null
    )
  }

  _menu = ()=>{
    console.log("ICI")

  }
}
const mapStateToProps = (state) => {
  return {
    param: state.prefReducers,
    data: state.dataReducers
  }
}

//Constante for reset the stack
const recapReset = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Recap' })],
});

//Constante for reset the stack
const welcomeReset = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
});
export default connect(mapStateToProps)(MainComponentWelcome)
