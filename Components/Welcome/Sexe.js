import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity} from 'react-native'
import text from './text'
import { connect } from 'react-redux'

class Sexe extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
      <View style={styles.bulle}>
        <Text style={styles.h2}>{text.hi}</Text>
        <Text style={styles.content}>{text.welcome}</Text>
        <View style= {styles.button_container}>
            <TouchableOpacity style={styles.button} title='Man' onPress={() =>this._manClick()}>
              <Text style={styles.text_button}>Man</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} title='Woman' onPress={() =>this._womanClick()}>
              <Text style={styles.text_button}>Woman</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  }

  _manClick(){
    const action = {type: "TOGGLE_SEXE", value: "M"}
    this.props.dispatch(action)
    this.props.navigation.navigate("Color")
  }

  _womanClick(){
      const action = {type: "TOGGLE_SEXE", value: "F"}
      this.props.dispatch(action)
      this.props.navigation.navigate("Color")
  }
}
const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'#DDEAF2'
  },
  bulle:{

  },
  h2:{
    fontSize:20,
  },
  content:{

  },
  button_container:{
    flexDirection:'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  button:{
    width: 100,
    height: 50,
    backgroundColor: '#5057E1',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_button :{

    color: '#FFFFFF'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapDispatchToProps)(Sexe)
