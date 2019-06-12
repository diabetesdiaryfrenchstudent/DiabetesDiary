import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,ImageBackground,Image} from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation';
import styles from './Styles'
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/People/M_type.png'
import woman from '../../Images/People/W_type.png'

class Type extends React.Component{
  render(){
    return(
      <View style={[styles.main_container,{backgroundColor: this.props.param.color}]}>
      <ImageBackground source={require('../../Images/blue.png')}  imageStyle={{resizeMode: 'stretch'}} style={styles.img_bulle}>
      <View style={styles.bulle}>
        <Text style={stylesP.h2}>{text.nice} {this.props.param.name} !</Text>
        <Text style={styles.content}>{text.type}</Text>
        <View style= {styles.button_container}>
            <TouchableOpacity style={styles.button} title='Type 1' onPress={() =>this._Click("1")}>
              <Text style={styles.text_button}>Type 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title='Type 2' onPress={() =>this._Click("2")}>
              <Text style={styles.text_button}>Type 2</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.guy}>
      {this._displayDoctor()}
        </View>
      </ImageBackground>
      </View>
    )
  }

  _displayDoctor(){
    if(this.props.param.sexe==="F"){
      return(
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
            width={175}
            source={woman}
          />
      )
    }
    else{
      return(
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
            width={215}
            source={guy}
          />
      )
    }
  }
  _Click(type){
      const action = {type: "TOGGLE_TYPE", value: type}
      //Send to the store the value and the type of action
      this.props.dispatch(action)

      //AS it's the last action, we reset the stack in order to prevent user to go back
      this.props.navigation.dispatch(resetAction);
  }
}
const stylesP = StyleSheet.create({
  h2:{
    fontSize:20,
  },

})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state
  }
}

//Constante for reset the stack
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Recap' })],
});


export default connect(mapStateToProps)(Type)
