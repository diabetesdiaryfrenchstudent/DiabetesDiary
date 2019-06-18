import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Navigation from '../Navigation/Navigation'
import {Provider} from 'react-redux'
import Store from '../Store/configureStore'
import Icon from "react-native-vector-icons/Entypo"
import { DrawerItems, DrawerNavigation, DrawerActions } from 'react-navigation'

export default class App extends React.Component {

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
    this.props.navigation.setParams({openDrawer: this._menu});
  }
  render() {
    console.log(this.props.navigation.getChildNavigation)
    return (
      <Provider store={Store}>
    <Navigation/>
    </Provider>
    );
  }

  _menu = ()=>{
    console.log("ICI")

  }
}
