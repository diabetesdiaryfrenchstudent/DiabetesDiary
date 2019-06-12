import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,ImageBackground,Image} from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import styles from './Styles'
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/M_recap.png'

class Recap extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    if(this.props.param.sexe==="F"){
      sexe="Femme"
    }
    else{
      sexe="Homme"
    }
    return(
      <View style={[styles.main_container,{backgroundColor: this.props.param.color}]}>
      <ImageBackground source={require('../../Images/blue.png')}  imageStyle={{resizeMode: 'stretch'}} style={styles.img_bulle}>
      <View style={styles.bulle}>
      <TouchableOpacity onPress={() =>this._sexeScreen()}>
        <Text style={stylesP.h2}>Sexe : {this.props.param.sexe}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>this._nameScreen()}>
        <Text style={stylesP.h2}>Name : {this.props.param.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this._typeScreen()}>
        <Text style={stylesP.h2}>Type of diabetes : {this.props.param.type}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this._colorScreen()}>
        <Text style={stylesP.h2}>Color : {this.props.param.color}</Text>
        </TouchableOpacity>
        <Text style={stylesP.h2}>Data : {this.props.param.data}</Text>
          <Button title='Valider' onPress={() => this._buttonClick()}/>
      </View>
      <View style={styles.guy}>
      <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
          width={200}
          source={guy}
        />
        </View>
      </ImageBackground>


      </View>
    )
  }

  _buttonClick = () =>{
    console.log("Infos checked")
  }
  _sexeScreen = ()=>{
    this.props.navigation.navigate("Sexe")
  }

  _typeScreen = ()=>{
    this.props.navigation.navigate("Type")
  }
  _nameScreen = ()=>{
    this.props.navigation.navigate("Name")
  }
  _colorScreen = ()=>{
    this.props.navigation.navigate("Color")
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




export default connect(mapStateToProps)(Recap)
