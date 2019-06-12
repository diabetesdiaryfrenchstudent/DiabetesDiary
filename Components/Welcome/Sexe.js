import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity,ImageBackground,Image } from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import styles from './Styles'
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/People/M_sexe.png'
import woman from '../../Images/People/W_sexe.png'

class Sexe extends React.Component {
  render() {
    return (
      <View style={[styles.main_container,{backgroundColor: this.props.param.color}]}>
        <ImageBackground source={require('../../Images/blue.png')}  imageStyle={{resizeMode: 'stretch'}} style={styles.img_bulle}>
        <View style={styles.bulle}>
          <Text style={stylesP.h2}>{text.hi}</Text>
          <Text style={styles.content}>{text.welcome}</Text>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button} title='Man' onPress={() => this._Click("M")}>
              <Text style={styles.text_button}>Man</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title='Woman' onPress={() => this._Click("F")}>
              <Text style={styles.text_button}>Woman</Text>
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
            width={225}
            source={guy}
          />
      )
    }
  }

  //Action when user choose his sex
  _Click(sexe) {
    const action = { type: "TOGGLE_SEXE", value: sexe }
    //Send to the store the value and the type of action
    this.props.dispatch(action)

    //Check if the initialization is over
    if (this.props.param.endInit) {
      this.props.navigation.navigate("Recap")
    } else {
      this.props.navigation.navigate("Color")
    }

  }
}


const stylesP = StyleSheet.create({
  h2: {
    fontSize: 20,
  },

})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state
  }
}

export default connect(mapStateToProps)(Sexe)
