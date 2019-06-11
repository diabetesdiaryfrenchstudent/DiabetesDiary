import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity,TextInput} from 'react-native'
import text from './text'
import { connect } from 'react-redux'


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
      <View style={styles.main_container}>
      <View style={styles.bulle}>
      //Buttons to modify informations
      <TouchableOpacity onPress={() =>this._sexeScreen()}>
        <Text style={styles.h2}>Sexe : {this.props.param.sexe}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>this._nameScreen()}>
        <Text style={styles.h2}>Name : {this.props.param.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this._typeScreen()}>
        <Text style={styles.h2}>Type of diabetes : {this.props.param.type}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this._colorScreen()}>
        <Text style={styles.h2}>Color : {this.props.param.color}</Text>
        </TouchableOpacity>
        <Text style={styles.h2}>Data : {this.props.param.data}</Text>
        <Button title='Valider' onPress={() => this._buttonClick()}/>
      </View>
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
const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'#DDEAF2'
  },
  bulle:{
    margin:10,
  },
  h2:{
    fontSize:20,
  },
  content:{

  },
  text_button :{

    color: '#FFFFFF'
  }
})


//Mapping of store to props of the component
const mapStateToProps = (state) => {
  return {
    param: state
  }
}




export default connect(mapStateToProps)(Recap)
