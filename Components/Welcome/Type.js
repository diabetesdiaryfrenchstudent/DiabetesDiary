import React from 'react'
import {StyleSheet, View,Text,Button,TouchableOpacity} from 'react-native'
import text from './text'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation';

class Type extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
      <View style={styles.bulle}>
        <Text style={styles.h2}>{text.nice}</Text>
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
      </View>
    )
  }
  _Click(type){
      const action = {type: "TOGGLE_TYPE", value: type}
      //Send to the store the value and the type of action
      this.props.dispatch(action)

      //AS it's the last action, we reset the stack in order to prevent user to go back
      this.props.navigation.dispatch(resetAction);
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
