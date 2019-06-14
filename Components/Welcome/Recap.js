import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,ImageBackground,Image} from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import styles from './Styles'
import AutoHeightImage from 'react-native-auto-height-image';
import guy from '../../Images/People/M_recap.png'
import woman from '../../Images/People/W_recap.png'

class Recap extends React.Component{
  constructor(props){
    super(props)
    const sexe=""

    if(this.props.param.sexe==="F"){
      this.sexe="Woman"
    }
    else{
      this.sexe="Man"
    }

  }


  render(){
    console.log(this.props)
    return(
      <View style={[styles.main_container,{backgroundColor: this.props.param.color}]}>
      <ImageBackground source={require('../../Images/blue.png')}  imageStyle={{resizeMode: 'stretch'}} style={styles.img_bulle}>
      <View style={styles.bulle}>
      <TouchableOpacity onPress={() =>this._sexeScreen()}>
        <Text style={stylesP.h2}>Sexe : {this.sexe}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>this._nameScreen()}>
        <Text style={stylesP.h2}>Name : {this.props.param.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this._typeScreen()}>
        <Text style={stylesP.h2}>Type of diabetes : {this.props.param.type}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this._colorScreen()}>
        <View style={stylesP.color_container}>
        <Text style={stylesP.h2}>Color :</Text>
        <View style={[styles.color,{backgroundColor: this.props.param.color}]}>
        <Text>                      </Text>
        </View>
        </View>
        </TouchableOpacity>
        <Text style={stylesP.h2}>Data : {this.props.param.data}</Text>
          <Button title='Valider' onPress={() => this._buttonClick()}/>
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
            width={180}
            source={woman}
          />
      )
    }
    else{
      return(
        <AutoHeightImage //In order that the NSE logo being adapt for every phone screen
            width={200}
            source={guy}
          />
      )
    }
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
  color: {
    marginLeft: 5,
    width: 40,
    height: 6,
  },
  color_container:{
    flexDirection: 'row'
  }
})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state.prefReducers,
    data:state.dataReducers
  }
}




export default connect(mapStateToProps)(Recap)
