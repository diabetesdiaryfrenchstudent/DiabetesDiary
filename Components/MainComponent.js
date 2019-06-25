import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import NavigationD from '../Navigation/Navigation'
import NavigationS from './Welcome/Navigation/Navigation'
import {Provider} from 'react-redux'
import Store from '../Store/configureStore'
import Icon from "react-native-vector-icons/Entypo"
import { DrawerItems, DrawerNavigation, DrawerActions } from 'react-navigation'
import { connect } from 'react-redux'
import MainComponentDrawer from './MainComponentDrawer'
class MainComponent extends React.Component {

//   static navigationOptions = ({navigation})=>{
//     return{
//     headerLeft:
//           <Button title='menu'
//            style={{ fontSize:30, marginLeft: 15}}
//            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//             />,
//   };
// };


  render() {

    if(this.props.param.endInit){
      return (

      <MainComponentDrawer/>

      );
    }else{
      return (

      <NavigationS/>

      );
    }

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
export default connect(mapStateToProps)(MainComponent)
