import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity} from 'react-native'
import text from './text'
import { connect } from 'react-redux'

class Type extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
      <View style={styles.bulle}>
        <Text style={styles.h2}>{text.nice}</Text>
        <Text style={styles.content}>{text.type}</Text>
        <View style= {styles.button_container}>
            <TouchableOpacity style={styles.button} title='Type 1' onPress={() =>this._type1Click()}>
              <Text style={styles.text_button}>Type 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} title='Type 2' onPress={() =>this._type2Click()}>
              <Text style={styles.text_button}>Type 2</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  }

  _type1Click(){
    const action = {type: "TOGGLE_TYPE", value: "1"}
    this.props.dispatch(action)
    //this.props.navigation.navigate("Color")
  }

  _type2Click(){
      const action = {type: "TOGGLE_TYPE", value: "2"}
      this.props.dispatch(action)
      //this.props.navigation.navigate("Color")
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

export default connect(mapDispatchToProps)(Type)
