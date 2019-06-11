import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity} from 'react-native'
import text from './text'
import { connect } from 'react-redux'

class Color extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
      <View style={styles.bulle}>
        <Text style={styles.content}>{text.color}</Text>
        <View style= {styles.button_container}>
            <TouchableOpacity style={styles.button} title='Blue' onPress={() =>this._Click("blue")}>
              <Text style={styles.text_button}>Blue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} title='Red' onPress={() =>this._Click("red")}>
              <Text style={styles.text_button}>Red</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  }

  _Click(color){
    const action = {type: "TOGGLE_COLOR", value: color}
    if(this.props.param.endInit){
      this.props.navigation.navigate("Recap")
    }else{
      this.props.navigation.navigate("Name")
    }
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

const mapStateToProps = (state) => {
  return {
    param: state
  }
}

export default connect(mapStateToProps)(Color)
