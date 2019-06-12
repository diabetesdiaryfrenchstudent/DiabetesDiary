import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,ImageBackground,Image} from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import styles from './Styles'
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/M_color.png'

class Color extends React.Component{
  render(){
<<<<<<< HEAD
    //Test master conflict
=======
    //Test
>>>>>>> Welcome
    return(
      <View style={[styles.main_container,{backgroundColor: this.props.param.color}]}>
        <ImageBackground source={require('../../Images/blue.png')}  imageStyle={{resizeMode: 'stretch'}} style={styles.img_bulle}>
      <View style={styles.bulle}>
        <Text style={styles.content}>{text.color}</Text>
        <View style= {styles.button_container}>
            <TouchableOpacity style={styles.button} title='Blue' onPress={() =>this._Click("#DDEAF2")}>
              <Text style={styles.text_button}>Blue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title='Red' onPress={() =>this._Click("#FF7A7A")}>
              <Text style={styles.text_button}>Red</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.guy}>
      <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={205}
          source={guy}
        />
        </View>
      </ImageBackground>
      </View>
    )
  }

  _Click(color){
    const action = {type: "TOGGLE_COLOR", value: color}
    //Send to the store the value and the type of action
    this.props.dispatch(action)

    //Check if the initialization is over
    if(this.props.param.endInit){
      this.props.navigation.navigate("Recap")
    }else{
      this.props.navigation.navigate("Name")
    }
  }


}
const stylesP = StyleSheet.create({


})

//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state
  }
}

export default connect(mapStateToProps)(Color)
